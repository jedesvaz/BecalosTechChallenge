function RestartButton({ onRestart }) {
  return (
    <button className="boton-reiniciar" onClick={onRestart}>
      Reiniciar Juego
    </button>
  );
}
export default RestartButton;