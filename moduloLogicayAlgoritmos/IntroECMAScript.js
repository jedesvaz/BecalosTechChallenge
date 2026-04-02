
import { registrarDestino, mostrarItinerario} from './modulos.js'; //Importación de las funciones desde el modulos.js
const iniciarApp = () => {
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("CDMX", "PUEDE SER UNA FECHA CUALQUIERA", "Camión");
    mostrarItinerario();
}

iniciarApp();