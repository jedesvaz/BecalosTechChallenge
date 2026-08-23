import { useReducer, useRef, useCallback, useEffect, useState } from "react";

const initialState = {
    count: 0,
    history: JSON.parse(localStorage.getItem('history')) || []
};
function reducer(state, action) {
  switch (action.type) {
    case "increment":
    return {
        count: state.count + action.value,
        history: [...state.history, { texto: `+${action.value} (Nuevo valor: ${state.count + action.value})`, prevCount: state.count }]
    };
case "decrement":
    return {
        count: state.count - 1,
        history: [...state.history, { texto: `-1 (Nuevo valor: ${state.count - 1})`, prevCount: state.count }]
    };
    case "undo":
    if (state.history.length === 0) return state;
    const lastEntry = state.history[state.history.length - 1];
    return {
        count: lastEntry.prevCount,
        history: state.history.slice(0, -1)
    };
    case "reset":
      return initialState;
    default:
      return state;
  }
}


function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incrementBtnRef = useRef(null);
  const [inputValue, setInputValue] = useState(1);

  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment", value: inputValue });
}, [inputValue]);

const handleDecrement = useCallback(() => {
  dispatch({ type: "decrement" });
}, []);

  // Fijar el foco en el botón de incremento al renderizar
  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(state.history));
}, [state.history]);

  return (
    <div>
      <h2>Contador: {state.count}</h2>
      <input
    type="number"
    value={inputValue}
    onChange={(e) => setInputValue(Number(e.target.value))}
    min="1"
/>
      <button ref={incrementBtnRef} onClick={() => dispatch({ type: "increment", value: inputValue })}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "undo" })}>Deshacer</button>

      <h3>Historial de cambios:</h3>
      <ul>
        {state.history.map((entry, index) => (
          <li key={index}>{entry.texto}</li>
        ))}
      </ul>
    </div>
  );
}
export default CounterGame;
