import { useEffect, useState } from "react";
import Scene from "./scene/Scene";
import Crosshair from "./components/Crosshair";
import socket from "./network/socket";

function App() {

  
  const [players, setPlayers] = useState({});
  const [myId, setMyId] = useState("");

  useEffect(() => {

    if (socket.connected) {
  console.log("Already Connected:", socket.id);
  setMyId(socket.id);
}


    socket.on("connect", () => {
      console.log("Connected:", socket.id);
      setMyId(socket.id);
    });

    socket.on("players-update", (playersData) => {
      // console.log("Players:", playersData);
      setPlayers(playersData);
    });

    return () => {
      socket.off("connect");
      socket.off("players-update");
    };
  }, []);

//   console.log("myId:", myId);
// console.log("players:", players);

  return (
    <>
      <Scene
  players={players}
  myId={myId}
  
/>
      <Crosshair />
    </>
  );
}

export default App;