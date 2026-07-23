function Tree({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* Trunk */}
      <mesh position={[0, 2, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.5, 4, 16]} />
        <meshStandardMaterial color="#6B4423" />
      </mesh>

      {/* Leaves */}
      <mesh position={[0, 5, 0]} castShadow>
        <sphereGeometry args={[2, 24, 24]} />
        <meshStandardMaterial color="#2E8B57" />
      </mesh>
    </group>
  );
}

export default Tree;