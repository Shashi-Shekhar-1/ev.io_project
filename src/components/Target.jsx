function Target({ position }) {
  return (
    <mesh position={position} castShadow name="target">
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

export default Target;