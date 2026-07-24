import PlayerModel from "./PlayerModel";
import { useRef, useEffect } from "react";

function RemotePlayer({ position = [5, 0.5, 0] }) {
  const playerRef = useRef();

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.position.set(...position);
    }
  }, [position]);

  return <PlayerModel playerRef={playerRef} color="yellow" />;
}

export default RemotePlayer;