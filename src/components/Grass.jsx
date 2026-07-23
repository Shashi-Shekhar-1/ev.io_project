function Grass({ position = [0, 0, 0] }) {
  return (
    <mesh
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <circleGeometry args={[5, 40]} />
      <meshStandardMaterial color="#3FA34D" />
    </mesh>
  );
}

export default Grass;