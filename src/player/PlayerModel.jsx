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
      {/* PLAYER CHARACTER / HITBOX */}
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
        {/* Invisible hitbox material */}
        <boxGeometry args={[0.8, 1.8, 0.5]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={visible ? 0 : 0}
        />

        
        {/* Body */}
        <mesh
          name="player"
          position={[0, 0, 0]}
          userData={{
            type: "player",
            socketId,
          }}
        >
          <boxGeometry args={[0.55, 0.8, 0.35]} />
          <meshStandardMaterial color={color} />
        </mesh>

        {/* Head */}
        <mesh
          name="player"
          position={[0, 0.65, 0]}
          userData={{
            type: "player",
            socketId,
          }}
        >
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial color="#d6a57a" />
        </mesh>

        {/* Left Arm */}
        <mesh
          name="player"
          position={[-0.38, 0, 0]}
          userData={{
            type: "player",
            socketId,
          }}
        >
          <boxGeometry args={[0.15, 0.65, 0.15]} />
          <meshStandardMaterial color={color} />
        </mesh>

        {/* Right Arm */}
        <mesh
          name="player"
          position={[0.38, 0, 0]}
          userData={{
            type: "player",
            socketId,
          }}
        >
          <boxGeometry args={[0.15, 0.65, 0.15]} />
          <meshStandardMaterial color={color} />
        </mesh>

        {/* Left Leg */}
        <mesh
          name="player"
          position={[-0.15, -0.65, 0]}
          userData={{
            type: "player",
            socketId,
          }}
        >
          <boxGeometry args={[0.28, .7, 0.2]} />
          <meshStandardMaterial color="#222" />
        </mesh>

        {/* Right Leg */}
        <mesh
          name="player"
          position={[0.15, -0.65, 0]}
          userData={{
            type: "player",
            socketId,
          }}
        >
          <boxGeometry args={[0.18, 0.7, 0.2]} />
          <meshStandardMaterial color="#222" />
        </mesh>
      </mesh>

      {/* =====================
          YOUR EXISTING HEALTH BAR
      ====================== */}

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