import { useState } from "react";

function useHealth(initialHealth = 100) {
  const [health, setHealth] = useState(initialHealth);

  const takeDamage = (damage) => {
    setHealth((prev) => Math.max(prev - damage, 0));
  };

  const resetHealth = () => {
    setHealth(initialHealth);
  };

  const isDead = health <= 0;

  return {
    health,
    takeDamage,
    resetHealth,
    isDead,
  };
}

export default useHealth;