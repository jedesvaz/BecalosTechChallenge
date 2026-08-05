import { useState } from "react";

function ListaCompras() {
  const [lista, setLista] = useState([]);
  const [producto, setProducto] = useState("");
  const agregarProducto = () => {
    if (producto.trim() !== "") {
      setLista([...lista, producto]);
      setProducto("");
    }
  };
  const eliminarProducto = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h2>Lista de Compras</h2>
      <input
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
        placeholder="Escribe un producto"
      />
      <button onClick={agregarProducto}>Agregar</button>
      <ul>
        {lista.map((producto, index) => (
          <li key={index}>
            {producto}
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;
