

function Gate({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* Left Pillar */}
      <mesh position={[-6, 3.5, 0]} castShadow>
        <boxGeometry args={[2.5, 8, 1.5]} />
        <meshStandardMaterial color="#B8B8B8" />
      </mesh>

      {/* Right Pillar */}
      <mesh position={[6, 3.5, 0]} castShadow>
        <boxGeometry args={[2.5, 8, 1.5]} />
        <meshStandardMaterial color="#B8B8B8" />
      </mesh>

      {/* Top Beam */}
      <mesh position={[0, 8, 0]} castShadow>
        <boxGeometry args={[14, 2, 2.5]} />
        <meshStandardMaterial color="#505050" />
      </mesh>
{/* Sign Board */}
<mesh position={[0, 8.5, 0.8]} castShadow>
  <boxGeometry args={[7, 1.8, 0.2]} />
  <meshStandardMaterial color="#1E3A5F" />
</mesh>

    </group>
  );
}

export default Gate;