// Sistema de Reservas para un Restaurante
 
// Simulando una base de datos de mesas
const mesasDisponibles = 5; // Número de mesas disponibles para reservar
 
// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas, nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // TODO 1: Verifica si mesasSolicitadas es menor o igual a mesasDisponibles
            // Si sí → llama a resolve() con un mensaje de confirmación
            // Si no → llama a reject() con un mensaje de error
            // Pista: if (mesasSolicitadas <= mesasDisponibles) { ... } else { ... }
            if (mesasSolicitadas <= mesasDisponibles) {
                resolve(`Reserva confirmada para ${nombreCliente}. ;)`);
            } else {
                reject(`No hay suficientes mesas disponibles para tu reserva, ${nombreCliente}.`);
            }
        }, 2000); // retraso de 2 segundos
    });
}
 
// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // TODO 2: Genera un número aleatorio con Math.random()
            const exito = Math.random() > 0.3; // 70% de probabilidad de éxito
            // Si el número es mayor a 0.3 → resolve() con mensaje de éxito
            // Si no → reject() con mensaje de error
            // Pista: const exito = Math.random() > 0.3;
            if (exito) {
                resolve(`Confirmación de reserva enviada por correo a ${nombreCliente}.`);
            } else {
                reject(`Error al enviar la confirmación de reserva a ${nombreCliente}.`);
            }
        }, 1500); // retraso de 1.5 segundos
    });
}
 
// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
    try {
        console.log("Verificando disponibilidad de mesas...");
        const disponibilidad = await verificarDisponibilidad(mesasSolicitadas, nombreCliente);
 
        // TODO 3: Imprime en consola el mensaje que devolvió verificarDisponibilidad
        // Pista: console.log(disponibilidad);
        console.log(disponibilidad);
 
        // TODO 4: Llama a enviarConfirmacionReserva con await y guarda el resultado
        // Pista: const confirmacion = await enviarConfirmacionReserva(nombreCliente);
        const confirmacion = await enviarConfirmacionReserva(nombreCliente);
 
        // TODO 5: Imprime en consola el mensaje de confirmación del correo
        console.log(confirmacion);
 
    } catch (error) {
        console.log("Error:", error);
    }
}
 
// Llamadas de prueba — descomenta una a la vez para probar distintos casos
hacerReserva("Juan Pérez", 3);   // debería funcionar (3 <= 5)
// hacerReserva("Ana García", 7);   // debería fallar (7 > 5)