import { forwardRef } from "react";

const Weapon = forwardRef((props, ref) => {
  return (
    <group ref={ref}>
      {/* Gun Body */}
      <mesh position={[0.3, -0.25, -0.6]}>
        <boxGeometry args={[0.25, 0.15, 0.8]} />
        <meshStandardMaterial color="#2b2b2b" />
      </mesh>

      {/* Barrel */}
      <mesh position={[0.3, -0.25, -1]}>
        <cylinderGeometry args={[0.03, 0.03, 0.4, 16]} />
        <meshStandardMaterial color="#444" />
      </mesh>
    </group>
  );
});

export default Weapon;