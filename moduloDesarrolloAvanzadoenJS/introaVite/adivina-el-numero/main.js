import './styles.css';

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let contadorIntentos = 0;

const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const botonReiniciar = document.getElementById('reiniciar');
const mensaje = document.getElementById('mensaje');
const intentos = document.getElementById('intentos');

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        return;
    }

    contadorIntentos++;
    intentos.textContent = `Intentos: ${contadorIntentos}`;
    inputNumero.value = '';

    if (numeroJugador === numeroSecreto) {
        mensaje.textContent = `¡Felicidades! ¡Adivinaste en ${contadorIntentos} intentos!`;
        botonAdivinar.disabled = true;
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = 'El número es más alto.';
    } else {
        mensaje.textContent = 'El número es más bajo.';
    }
});

botonReiniciar.addEventListener('click', () => {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    contadorIntentos = 0;
    intentos.textContent = 'Intentos: 0';
    mensaje.textContent = '';
    inputNumero.value = '';
    botonAdivinar.disabled = false;
});