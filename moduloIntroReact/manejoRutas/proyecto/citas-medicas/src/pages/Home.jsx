import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Bienvenido al Sistema de Citas Médicas</h1>
            <Link to="/citas">Ver Citas</Link>
        </div>
    );
}

export default Home;