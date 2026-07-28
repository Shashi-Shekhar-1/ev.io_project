import PlayerModel from "./PlayerModel";
import { useRef, useEffect } from "react";

function RemotePlayer({ player }) {
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
  visible={true}
/>
  );
}

export default RemotePlayer;