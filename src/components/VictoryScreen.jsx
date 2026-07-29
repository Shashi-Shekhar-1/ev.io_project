function VictoryScreen({ winner, myId }) {
  if (!winner) return null;

  const isWinner = winner === myId;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.75)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px 60px",
          border: "2px solid white",
          borderRadius: "20px",
          background: "rgba(20, 20, 20, 0.95)",
        }}
      >
        <div style={{ fontSize: "70px" }}>
          {isWinner ? "🏆" : "💀"}
        </div>

        <h1 style={{ fontSize: "50px", margin: "10px 0" }}>
          {isWinner ? "VICTORY!" : "DEFEAT"}
        </h1>

        <p style={{ fontSize: "22px" }}>
          {isWinner
            ? "You won the match!"
            : "Your opponent won the match."}
        </p>

        <p style={{ fontSize: "14px", opacity: 0.6 }}>
          Winner: {winner}
        </p>
      </div>
    </div>
  );
}

export default VictoryScreen;