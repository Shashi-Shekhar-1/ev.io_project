function PlayerModel({ playerRef, color = "blue" }) {
  return (
    <mesh ref={playerRef} position={[0, 0.5, 0]}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default PlayerModel;