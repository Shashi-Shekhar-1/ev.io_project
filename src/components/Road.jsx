function Road() {
  return (
    <>
      {/* Main Road */}
      <mesh
  rotation={[-Math.PI / 2, 0, 0]}
  position={[0, 0.01, 180]}
>
  <planeGeometry args={[12, 120]} />
  <meshStandardMaterial color="#4A4A4A" />
</mesh>

      {/* Left Sidewalk (Main Road) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-7, 0.02, 125]}>
        <planeGeometry args={[2, 250]} />
        <meshStandardMaterial color="#CFCFCF" />
      </mesh>

      {/* Right Sidewalk (Main Road) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[7, 0.02, 125]}>
        <planeGeometry args={[2, 250]} />
        <meshStandardMaterial color="#CFCFCF" />
      </mesh>

      {/* Horizontal Road */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 240]}>
        <planeGeometry args={[170, 12]} />
        <meshStandardMaterial color="#4A4A4A" />
      </mesh>

      {/* Top Sidewalk */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 247]}>
        <planeGeometry args={[250, 2]} />
        <meshStandardMaterial color="#CFCFCF" />
      </mesh>

      {/* Bottom Sidewalk */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 233]}>
        <planeGeometry args={[250, 2]} />
        <meshStandardMaterial color="#CFCFCF" />
      </mesh>
    </>
  );
}

export default Road;