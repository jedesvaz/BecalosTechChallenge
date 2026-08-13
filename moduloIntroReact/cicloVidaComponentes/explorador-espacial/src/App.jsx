

// import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './Planeta';


// distancia: Distancia (0).
// combustible: Combustible (100).
// estadoNave: Estado ("En órbita").
// planetasVisitados: Array vacío.

// Efectos Secundarios (useEffect):

// Montaje:
// Muestra un mensaje en la consola: "¡El panel de control está listo!"
// Simula el vuelo: Cada segundo, reduce combustible y aumenta distancia.
// Actualización:
// Si combustible cambia, muestra un mensaje: "¡Combustible actualizado!"
// Desmontaje:
// Limpia el intervalo de vuelo.
// Muestra un mensaje: "El panel de control se ha apagado."
// Cálculo con useMemo:

// Crea una variable mensajeEstado con useMemo. Este mensaje depende de estadoNave y se memoiza para evitar recalcularlo innecesariamente.
// Interfaz de Usuario:

// Muestra distancia, combustible, estado (usando mensajeEstado).
// Botón "Aterrizar":
// Cambia estado a "Aterrizando".
// Añade planeta a planetasVisitados.

// function App() {
//   const [distancia, setDistancia] = useState(0);
//   const [combustible, setCombustible] = useState(100);
//   const [estadoNave, setEstadoNave] = useState("En órbita");
//   const [planetasVisitados, setPlanetasVisitados] = useState([]);

//     useEffect(() => {
//     console.log("¡El panel de control está listo!");
//     }, []);
//     useEffect(() => {
//     const intervalo = setInterval(() => {
//         setCombustible(prev => prev > 0 ? prev - 1 : 0);
//         setDistancia(prev => prev + 1);
//     }, 1000);


//     return () => {
//       clearInterval(intervalo);
//         console.log("El panel de control se ha apagado.");
//       };

    
// }, []);
//     useEffect(() => {
//       console.log("¡Combustible Actualizado!");
//     }, [combustible]);
    
//     const mensajeEstado = useMemo(() => {
//       const mensajeEstado = `Estado de la nave: ${estadoNave}`;
//       return mensajeEstado;
//     }, [estadoNave]);

//     return (
//     <div>
//       {mensajeEstado}
//       <p>Distancia: {distancia}</p>
//       <p>Combustible: {combustible}</p>
//       <button onClick={() => {
//         setEstadoNave("Aterrizando");
//         setPlanetasVisitados(prev => [...prev, `Planeta ${planetasVisitados.length + 1}`]);
//       }}>Aterrizar</button>
//       {planetasVisitados.map((planeta, index) => (
//         <Planeta key={index} nombre={planeta} />
//       ))}
//     </div>
//   );

// }
// export default App;

import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [planetas, setPlanetas] = useState(
    JSON.parse(localStorage.getItem('planetas')) || []
  );
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const inputImagenRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('planetas', JSON.stringify(planetas));
  }, [planetas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoPlaneta = {
      nombre,
      descripcion,
      imagen: imagen ? URL.createObjectURL(imagen) : null,
    };

    setPlanetas([...planetas, nuevoPlaneta]);
    setNombre('');
    setDescripcion('');
    setImagen(null);

    if (inputImagenRef.current) {
      inputImagenRef.current.value = ''; // Limpiar el input de imagen
    }
  };

  const handleDelete = (index) => {
    const nuevosPlanetas = [...planetas];
    nuevosPlanetas.splice(index, 1);
    setPlanetas(nuevosPlanetas);
  };

  return (
    <div>
      <h1>Bitácora de Exploración</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
        <input
          type="text"
          placeholder="Nombre del planeta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
          required
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc', minHeight: '80px' }}
          required
        />
        <input
          type="file"
          onChange={(e) => setImagen(e.target.files[0])}
          ref={inputImagenRef}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#2d7dd2', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Guardar
          </button>
      </form>

      <h2>Planetas Registrados</h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {planetas.map((planeta, index) => (
          <li key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '200px' }}>
            <h3>{planeta.nombre}</h3>
            <p>{planeta.descripcion}</p>
            {planeta.imagen && <img src={planeta.imagen} alt={planeta.nombre} style={{ width: '100%', borderRadius: '4px' }}/>}
            <button onClick={() => handleDelete(index)} style={{ marginTop: '8px', padding: '6px 12px', backgroundColor: '#e63946', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;