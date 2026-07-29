function PlayerModel({
  playerRef,
  color = "blue",
  visible = true,
  socketId,
}) {
  return (
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
  );
}

export default PlayerModel;