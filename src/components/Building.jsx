function Building({ position = [0, 0, 0] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[25, 18, 20]} />
      <meshStandardMaterial color="#d8d8d8" />
    </mesh>
  );
}

export default Building;