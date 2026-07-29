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

if (player.health <= 0) {
  return null;
}

  return (
    <PlayerModel
  playerRef={playerRef}
  color="yellow"

  socketId={player.id}
  health={player.health}

  visible={true}
 
/>
  );
}

export default RemotePlayer;