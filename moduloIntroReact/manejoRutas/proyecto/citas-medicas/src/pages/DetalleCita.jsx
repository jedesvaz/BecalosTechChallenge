import { useParams, Link } from 'react-router-dom';

const citasData = [
    { id: 1, paciente: 'Ana Pérez', doctor: 'Dr. García', fecha: '2024-03-15', motivo: 'Consulta general' },
    { id: 2, paciente: 'Carlos López', doctor: 'Dra. Martínez', fecha: '2024-03-16', motivo: 'Revisión anual' },
    { id: 3, paciente: 'Luis Gómez', doctor: 'Dr. Rodríguez', fecha: '2024-03-17', motivo: 'Control de presión' },
];

function DetalleCita() {
    const { id } = useParams();
    const cita = citasData.find(c => c.id === parseInt(id));

    if (!cita) return <p>Cita no encontrada</p>;

    return (
        <div>
            <h1>Detalle de Cita</h1>
            <p>Paciente: {cita.paciente}</p>
            <p>Doctor: {cita.doctor}</p>
            <p>Fecha: {cita.fecha}</p>
            <p>Motivo: {cita.motivo}</p>
            <Link to="/citas">Volver a citas</Link>
        </div>
    );
}

export default DetalleCita;