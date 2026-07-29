
import { Text, Billboard } from "@react-three/drei";

function PlayerModel({
  playerRef,
  color = "blue",
  visible = true,
  socketId,
  health,
}) {
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

    
      <Text
        position={[
          playerRef.current?.position.x || 0,
          (playerRef.current?.position.y || 0.5) + 1,
          playerRef.current?.position.z || 0,
        ]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {health}
      </Text>
      
    </>
  );
}

export default PlayerModel;