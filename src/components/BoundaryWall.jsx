function BoundaryWall({
  position = [0, 0, 0],
  size = [10, 4, 1],
}) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color="#B5B5B5" />
    </mesh>
  );
}

export default BoundaryWall;