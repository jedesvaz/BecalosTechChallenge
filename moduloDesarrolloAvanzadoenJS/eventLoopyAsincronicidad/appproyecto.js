const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

// Esta función envuelve setTimeout en una Promise, para poder usar await con ella
function esperarTiempoDePreparacion(ms) {
    return new Promise((resolve, reject) => 
        {
    setTimeout(resolve, ms);
    });
}



async function processOrder(order) {
    // 1) Genera un tiempo aleatorio entre 1000 y 3000 ms
    const tiempoPreparacion = Math.floor(Math.random() * 2001) + 1000;
    // 2) Usa await para esperar a que pase ese tiempo, llamando a esperarTiempoDePreparacion
    await esperarTiempoDePreparacion(tiempoPreparacion);

    // 3) Actualiza el estado del pedido a "Completado" usando updateOrderStatus
    updateOrderStatus(order, "Completado");
}