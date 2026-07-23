import { Sky } from "@react-three/drei";

function SkyComponent() {
  return (
    <Sky
      distance={450000}
      sunPosition={[30, 15, -20]}
      turbidity={10}
      rayleigh={1}
      mieCoefficient={0.02}
      mieDirectionalG={0.75}
    />
  );
}

export default SkyComponent;