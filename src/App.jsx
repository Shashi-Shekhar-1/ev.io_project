import { useEffect, useState } from "react";
import Scene from "./scene/Scene";
import Crosshair from "./components/Crosshair";
import socket from "./network/socket";
import VictoryScreen from "./components/VictoryScreen";

function App() {

  
  const [players, setPlayers] = useState({});
  const [myId, setMyId] = useState("");
  const [winner, setWinner] = useState("");

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

    socket.on("game-over", ({ winner }) => {
      console.log("🎯 game-over event received");
  console.log("🏆 Winner:", winner);
  setWinner(winner);
});


    return () => {
      socket.off("connect");
      socket.off("players-update");
      socket.off("game-over");
    };
  }, []);

//   console.log("myId:", myId);
// console.log("players:", players);

  return (
    <>
      <Scene
  players={players}
  myId={myId}
  winner={winner}
  
/>
      <Crosshair />

      <VictoryScreen
  winner={winner}
  myId={myId}
/>
    </>
  );
}

export default App;