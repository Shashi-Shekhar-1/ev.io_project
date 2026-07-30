import PlayerModel from "./PlayerModel";
import { useRef, useEffect } from "react";

function RemotePlayer({ player }) {
  const playerRef = useRef();

  useEffect(() => {
    if (!playerRef.current) return;

    playerRef.current.position.set(
      player.x,
      player.y,
      player.z
    );

    if (player.rotation !== undefined) {
      playerRef.current.rotation.y = player.rotation;
    }
  }, [player]);

  useEffect(() => {
    console.log("Remote Health:", player.health);
  }, [player.health]);

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