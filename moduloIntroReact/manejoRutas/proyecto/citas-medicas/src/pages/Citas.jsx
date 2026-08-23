// Citas.jsx
import { Link } from 'react-router-dom';

const citasData = [
    { id: 1, paciente: 'Ana Pérez', doctor: 'Dr. García', fecha: '2024-03-15' },
    { id: 2, paciente: 'Carlos López', doctor: 'Dra. Martínez', fecha: '2024-03-16' },
    { id: 3, paciente: 'Luis Gómez', doctor: 'Dr. Rodríguez', fecha: '2024-03-17' },
];

function Citas() {
    return (
        <div>
            <h1>Lista de Citas</h1>
            <ul>
                {citasData.map(cita => (
                    <li key={cita.id}>
                        {cita.paciente} — {cita.doctor} — {cita.fecha}
                        <Link to={`/cita/${cita.id}`}> Ver detalle</Link>
                    </li>
                ))}
            </ul>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}

export default Citas;