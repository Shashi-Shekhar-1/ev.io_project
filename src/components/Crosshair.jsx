function Crosshair() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontSize: "28px",
        fontWeight: "bold",
        userSelect: "none",
        pointerEvents: "none",
        zIndex: 1000,
        textShadow: "0 0 8px black",
      }}
    >
      +
    </div>
  );
}

export default Crosshair;