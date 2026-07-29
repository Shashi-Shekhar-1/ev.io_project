
// import { Text, Billboard } from "@react-three/drei";

// function PlayerModel({
//   playerRef,
//   color = "blue",
//   visible = true,
//   socketId,
//   health,
// }) {
//   return (
//     <>
//       <mesh
//         ref={playerRef}
//         position={[0, 0.5, 0]}
//         visible={visible}
//         name="player"
//         userData={{
//           type: "player",
//           socketId,
//         }}
//       >
//         <boxGeometry />
//         <meshStandardMaterial color={color} />
//       </mesh>

    
//       <Text
//         position={[
//           playerRef.current?.position.x || 0,
//           (playerRef.current?.position.y || 0.5) + 1,
//           playerRef.current?.position.z || 0,
//         ]}
//         fontSize={0.30}
//         color="white"
//         anchorX="center"
//         anchorY="middle"
//       >
//         {health}
//       </Text>
      
//     </>
//   );
// }

// export default PlayerModel;



import { Text, Billboard } from "@react-three/drei";

function PlayerModel({
  playerRef,
  color = "blue",
  visible = true,
  socketId,
  health,
}) {
  const healthPercent = Math.max(0, health) / 100;

  return (
    <>
      <mesh
        ref={playerRef}
        position={[0, 0.5, 0]}
        visible={visible}
        name="player"
        userData={{
          type: "player",
          socketId,
        }}
      >
        <boxGeometry />
        <meshStandardMaterial color={color} />
      </mesh>

      <Billboard
        position={[
          playerRef.current?.position.x || 0,
          (playerRef.current?.position.y || 0.5) + 1,
          playerRef.current?.position.z || 0,
        ]}
      >
        {/* Background */}
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[1.05, 0.12]} />
          <meshBasicMaterial color="black" />
        </mesh>

        {/* Health */}
        <mesh
          position={[
            -(1 - healthPercent) / 2,
            0,
            0.01,
          ]}
          scale={[healthPercent, 1, 1]}
        >
          <planeGeometry args={[1, 0.08]} />
          <meshBasicMaterial
            color={
              health > 60
                ? "lime"
                : health > 30
                ? "yellow"
                : "red"
            }
          />
        </mesh>

        {/* Number */}
        <Text
          position={[0, 0.20, 0]}
          fontSize={0.12}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {health}
        </Text>
      </Billboard>
    </>
  );
}

export default PlayerModel;