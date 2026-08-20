import { useState } from "react";
import Message from "./Message";
import InputNumber from "./InputNumber";
import RestartButton from "./RestartButton";
import './Game.css';


function Game() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1); // Número aleatorio entre 1 y 100
  const [guess, setGuess] = useState(""); // Estado para almacenar el intento del usuario
  const [message, setMessage] = useState(""); // Estado para almacenar el mensaje de retroalimentación
  const handleGuess = () => {
    parseInt(guess) > number
      ? setMessage("Demasiado alto, intenta de nuevo.")
      : parseInt(guess) < number
        ? setMessage("Demasiado bajo, intenta de nuevo.")
        : setMessage("¡Correcto! Has adivinado el número.");
  };
  const handleRestart = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
  }

  return (
    <div className="contenedor">
      <h1>Adivina el número</h1>

      <p>Intenta adivinar el número entre 1 y 100</p>
      <InputNumber className="input" value={guess} onChange={(e) => setGuess(e.target.value)}/>
      <div className="botones">
        <button className="boton-adivinar" onClick={handleGuess}>Adivinar</button>
        <RestartButton className="boton-reiniciar" onRestart={handleRestart} />
      </div>
      <Message className="mensaje" text={message} />
    </div>
  );
}
export default Game;