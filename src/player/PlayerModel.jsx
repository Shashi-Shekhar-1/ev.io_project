function PlayerModel({
  playerRef,
  color = "blue",
  visible = true,
<<<<<<< HEAD
  socketId,
=======
>>>>>>> 38efd12c8ba7d418ae6a8e34849d10a39e323694
}) {
  return (
    <mesh
      ref={playerRef}
      position={[0, 0.5, 0]}
      visible={visible}
      name="player"
<<<<<<< HEAD
      userData={{
  type: "player",
  socketId,
}}
=======
>>>>>>> 38efd12c8ba7d418ae6a8e34849d10a39e323694
    >
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default PlayerModel;