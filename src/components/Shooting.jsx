import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import socket from "../network/socket";

import { useState } from "react";

function Shooting() {
  const { camera, scene } = useThree();
  const [impact, setImpact] = useState(null);

  

  useEffect(() => {
    const raycaster = new THREE.Raycaster();

    const shoot = () => {

      // Play Gun Sound
      const sound = new Audio("/sounds/gun.mp3");
      sound.volume = 0.4;
      sound.play().catch(() => {});

      socket.emit("player-fire");

      raycaster.setFromCamera(
        new THREE.Vector2(0, 0),
        camera
      );

      const intersects = raycaster.intersectObjects(
        scene.children,
        true
      );

      if (intersects.length > 0) {

        setImpact(intersects[0].point);

  setTimeout(() => {
    setImpact(null);
  }, 100);

        const hit = intersects[0].object;

        console.log("Hit:", hit.name);

        if (hit.name === "player") {

          console.log("👤 Player Hit!");

          socket.emit("player-hit", {
            playerId: hit.userData.socketId,
          });

          return;
        }

        if (hit.name === "target") {

          console.log("🎯 Target Hit!");

          if (hit.userData.takeDamage) {
            hit.userData.takeDamage();
          }

          return;
        }
      }
    };

    window.addEventListener("click", shoot);

    return () => {
      window.removeEventListener("click", shoot);
    };
  }, [camera, scene]);

  return (
  <>
    {impact && (
      <mesh position={impact}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshBasicMaterial
          color="red"
          toneMapped={false}
        />
      </mesh>
    )}
  </>
);
}

export default Shooting;