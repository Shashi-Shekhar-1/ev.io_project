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
    }
  }, [player]);

  return (
    <PlayerModel
  playerRef={playerRef}
  color="yellow"
  socketId={player.id}
/>
  );
}

export default RemotePlayer;