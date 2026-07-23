
import useHealth from "../hooks/useHealth";
import gameManager from "../game/GameManager";

function Target({ position }) {
  const {
    health,
    takeDamage,
    isDead,
  } = useHealth(100);

  

  if (isDead) {
  return null;
}

  return (
    <mesh
      position={position}
      castShadow
      name="target"
      userData={{
       takeDamage: () => {
  const remainingHealth = health - 20;

  takeDamage(20);

  console.log("Health:", remainingHealth);

  if (remainingHealth <= 0) {
    gameManager.addScore(10);
  }
},
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

export default Target;