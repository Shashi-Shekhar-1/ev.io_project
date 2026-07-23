import { Canvas } from "@react-three/fiber";
import Cube from "../components/Cube";
import Ground from "../components/Ground";
import { OrbitControls } from "@react-three/drei";
import PlayerControls from "../controls/PlayerControls";
import Player from "../player/Player";
import SkyComponent from "../components/Sky";
import Road from "../components/Road";
import Building from "../components/Building";
import Tree from "../components/Tree";
import Grass from "../components/Grass";
import Gate from "../components/Gate";

import BoundaryWall from "../components/BoundaryWall";

import Target from "../components/Target";

function Scene() {
  return (
    <Canvas camera={{ position: [0, 1.6, 5], fov: 75 }}>
      <color attach="background" args={["#87CEEB"]} />
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} intensity={2} />

       <SkyComponent />
      

      <Ground />
      <Road/>
      <Building position={[-60, 9, 240]} />
<Building position={[60, 8, 240]} />
<Building position={[40, 9, 200]} />
<Building position={[0, 10, 255]} />
<Building position={[25, 4, 160]} />
      <Player/>
<Tree position={[-10, -2, 170]} />
<Tree position={[10, 0, 190]} />

<Tree position={[-15, -1, 200]} />
<Tree position={[15, 0, 200]} />

<Tree position={[-20, 0, 190]} />
<Tree position={[10, -2, 1150]} />

<Tree position={[-10, 0, 180]} />
<Tree position={[20, 0, 180]} />
<Tree position={[-50, -2, 170]} />
<Tree position={[-100, 0, 200]} />


<Grass position={[-20, 0, 150]} />
<Grass position={[10, 0, 140]} />
<Grass position={[-10, 0, 120]} />

<Grass position={[10, 0, 155]} />
<Grass position={[-10, 0, 155]} />
<Grass position={[45, 0.02, 210]} />

      <PlayerControls/>

<Gate position={[0, 0, 120]} />

{/* Left Wall */}
<BoundaryWall
  position={[-85, 2, 125]}
  size={[1, 4, 500]}
/>

{/* Right Wall */}
<BoundaryWall
  position={[85, 2, 125]}
  size={[1, 4, 260]}
/>

{/* Back Wall */}
<BoundaryWall
  position={[0, 2, 270]}
  size={[500, 4, 1]}
/>

<BoundaryWall
  position={[-170, 2, -125]}
  size={[160, 4, 1]}
/>

<BoundaryWall
  position={[170, 2, -125]}
  size={[160, 4, 1]}
/>

<Target position={[0, 1, 130]} />
<Target position={[-40, 1, 145]} />
<Target position={[4, 1, 200]} />
<Target position={[-80, 1, 155]} />
<Target position={[8, 1, 120]} />
<Target position={[10, 2, 160]} />

    </Canvas>
  );
}

export default Scene;