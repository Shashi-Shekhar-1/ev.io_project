import PlayerModel from "./PlayerModel";
import { useRef, useEffect } from "react";

function RemotePlayer({ player }) {

  useEffect(() => {
  if (playerRef.current) {
    playerRef.current.position.set(
      player.x,
      player.y,
      player.z
    );
  }
}, [player]);

useEffect(() => {
  console.log("Remote Health:", player.health);
}, [player.health]);

  const playerRef = useRef();

  useEffect(() => {
  if (playerRef.current) {
    playerRef.current.position.set(
      player.x,
      player.y,
      player.z
    );

    if (player.rotation !== undefined) {
      playerRef.current.rotation.y = player.rotation;
    }
  }
}, [player]);

  return (
    <PlayerModel
  playerRef={playerRef}
  color="yellow"
<<<<<<< HEAD
  socketId={player.id}
=======
  visible={true}
>>>>>>> 38efd12c8ba7d418ae6a8e34849d10a39e323694
/>
  );
}

export default RemotePlayer;