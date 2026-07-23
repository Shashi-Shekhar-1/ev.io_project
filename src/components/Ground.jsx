function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[500, 500]} />
      <meshStandardMaterial
  color="#4C8C4A"
/>
    </mesh>
  );
}

export default Ground;