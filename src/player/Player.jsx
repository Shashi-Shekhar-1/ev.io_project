import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Weapon from "../components/Weapon";
import useHealth from "../hooks/useHealth";
import PlayerModel from "./PlayerModel";
import socket from "../network/socket";

function Player({ player }) {
  const playerRef = useRef();
  const weaponRef = useRef();
  const { camera } = useThree();

  const {
  health,
  takeDamage,
  heal,
  resetHealth,
  isDead,
} = useHealth(100);

  const keys = useRef({
    KeyW: false,
    KeyA: false,
    KeyS: false,
    KeyD: false,
  });

  // Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (keys.current[event.code] !== undefined) {
        keys.current[event.code] = true;
      }
    };

    const handleKeyUp = (event) => {
      if (keys.current[event.code] !== undefined) {
        keys.current[event.code] = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);


  useEffect(() => {
  const damagePlayer = (event) => {
    if (event.code === "KeyH") {
      takeDamage(20);
      console.log("Player Health:", health - 20);
    }
  };

  window.addEventListener("keydown", damagePlayer);

  return () => {
    window.removeEventListener("keydown", damagePlayer);
  };
}, [health]);

  // Attach weapon to camera
  useEffect(() => {
    if (weaponRef.current) {
      camera.add(weaponRef.current);

      return () => {
        camera.remove(weaponRef.current);
      };
    }
  }, [camera]);

  const speed = 0.1;
  useEffect(() => {
  if (playerRef.current && player) {
    playerRef.current.position.set(
      player.x,
      player.y,
      player.z
    );
  }
}, [player]);


  

  useFrame(() => {
    if (!playerRef.current) return;

    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    direction.y = 0;
    direction.normalize();

    const right = new THREE.Vector3();
    right.crossVectors(direction, camera.up).normalize();
    right.y = 0;
    right.normalize();

    if (keys.current.KeyW) {
      playerRef.current.position.add(
        direction.clone().multiplyScalar(speed)
      );
    }

    if (keys.current.KeyS) {
      playerRef.current.position.add(
        direction.clone().multiplyScalar(-speed)
      );
    }

    if (keys.current.KeyA) {
      playerRef.current.position.add(
        right.clone().multiplyScalar(-speed)
      );
    }

    if (keys.current.KeyD) {
      playerRef.current.position.add(
        right.clone().multiplyScalar(speed)
      );
    }

    camera.position.x = playerRef.current.position.x;
    camera.position.y = playerRef.current.position.y + 1.6;
    camera.position.z = playerRef.current.position.z;

    socket.emit("player-move", {
  x: playerRef.current.position.x,
  y: playerRef.current.position.y,
  z: playerRef.current.position.z,
});
  });

  return (
    <>
      <PlayerModel
  playerRef={playerRef}
  color="blue"
  visible={false}
/>

      <Weapon ref={weaponRef} />
    </>
  );
}

export default Player;