function PlayerModel({
  playerRef,
  color = "blue",
  visible = true,
}) {
  return (
    <mesh
      ref={playerRef}
      position={[0, 0.5, 0]}
      visible={visible}
      name="player"
    >
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default PlayerModel;