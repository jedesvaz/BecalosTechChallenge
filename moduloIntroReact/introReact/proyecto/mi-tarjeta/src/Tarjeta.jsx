function Tarjeta({ nombre, profesion, mensaje }) {
 

  // Retornamos el JSX que representa la tarjeta
  return (
   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <div style={{ border: '1px solid #528f7d', backgroundColor: '#3b1cc5', padding: '20px', width: '300px', textAlign: 'center', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <h2>{nombre}</h2>
    <h4>{profesion}</h4>
    <p>{mensaje}</p>
  </div>
</div>
  );
}

export default Tarjeta;