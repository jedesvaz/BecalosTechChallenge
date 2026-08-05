import Tarjeta from "./Tarjeta";

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Tarjeta nombre="Ana" profesion="Dev" mensaje="Hola!" />
            <Tarjeta nombre="Carlos" profesion="Diseñador" mensaje="Bienvenido!" />
            <Tarjeta nombre="Luis" profesion="QA" mensaje="Mucho gusto!" />
        </div>
  );
}

export default App;
