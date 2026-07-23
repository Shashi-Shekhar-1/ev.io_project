// import { useEffect,useRef } from "react";
// import { useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";
// import Weapon from "./Weapon";


// function Player(){
//   const playerRef = useRef();
//   const weaponRef = useRef();

  
//   const { camera } = useThree();

//   const keys = useRef({
//   KeyW: false,
//   KeyA: false,
//   KeyS: false,
//   KeyD: false,
// });

// useEffect(() => {
//   const handleKeyDown = (event) => {
//     if (keys.current[event.code] !== undefined) {
//       keys.current[event.code] = true;
//     }
//   };

//   const handleKeyUp = (event) => {
//     if (keys.current[event.code] !== undefined) {
//       keys.current[event.code] = false;
//     }
//   };

//   window.addEventListener("keydown", handleKeyDown);
//   window.addEventListener("keyup", handleKeyUp);

//   return () => {
//     window.removeEventListener("keydown", handleKeyDown);
//     window.removeEventListener("keyup", handleKeyUp);
//   };
// }, []);


// const speed = 0.1; 
// useFrame(() => {
//   if (!playerRef.current) return;
//   const direction = new THREE.Vector3();
// camera.getWorldDirection(direction);
// direction.y = 0;
// direction.normalize();

// const right = new THREE.Vector3();
// right.crossVectors(direction, camera.up).normalize();
// right.y = 0;
// right.normalize();


//   if (keys.current.KeyW) {
//   playerRef.current.position.add(
//     direction.clone().multiplyScalar(speed)
//   );
// }

//   if (keys.current.KeyS) {
//   playerRef.current.position.add(
//     direction.clone().multiplyScalar(-speed)
//   );
// }

//   if (keys.current.KeyA) {
//   playerRef.current.position.add(
//     right.clone().multiplyScalar(-speed)
//   );
// }

// if (keys.current.KeyD) {
//   playerRef.current.position.add(
//     right.clone().multiplyScalar(speed)
//   );
// }

//   camera.position.x = playerRef.current.position.x;
// camera.position.y = playerRef.current.position.y + 1.6;
// camera.position.z = playerRef.current.position.z;

// });

//   return (
//     <mesh ref={playerRef} position={[0,0.5,0]}>
//     <boxGeometry/>
//     <meshStandardMaterial color="blue"/>
//     </mesh>
    
//   );
  
// }

// export default Player;





import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Weapon from "../components/Weapon";

function Player() {
  const playerRef = useRef();
  const weaponRef = useRef();
  const { camera } = useThree();

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
  });

  return (
    <>
      <mesh ref={playerRef} position={[0, 0.5, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>

      <Weapon ref={weaponRef} />
    </>
  );
}

export default Player;