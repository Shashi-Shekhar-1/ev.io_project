import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import socket from "../network/socket";

function Shooting() {
  const { camera, scene } = useThree();

  useEffect(() => {
    const raycaster = new THREE.Raycaster();

    const shoot = () => {
      console.log("CLICK DETECTED");
      socket.emit("player-fire");

      raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);

      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        const hit = intersects[0].object;

        console.log("Hit:", hit.name);

        

        if (hit.name === "player") {
  console.log("👤 Player Hit!");

  // console.log("Before Emit");
  console.log("Socket ID:", hit.userData.socketId);

  socket.emit("player-hit", {
  playerId: hit.userData.socketId,
});

  // console.log("After Emit");

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

  return null;
}

export default Shooting;