function HUD({ health }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        color: "white",
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "Arial",
        textShadow: "2px 2px 6px black",
        zIndex: 1000,
        userSelect: "none",
      }}
    >
      ❤️ Health : {health}
    </div>
  );
}

export default HUD;