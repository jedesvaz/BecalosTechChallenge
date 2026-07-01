const fetchBtn = document.getElementById('fetch-btn');
const axiosBtn = document.getElementById('axios-btn');
const dataContainer = document.getElementById('data-container');
const status = document.getElementById('status');

// La PokeAPI devuelve solo nombre y URL en la lista, sin imágenes
// Para evitar 20 peticiones extra, construimos la URL del sprite usando el índice:
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png

// Función para mostrar los pokémon en el contenedor
function renderPokemon(pokemonList) {
    dataContainer.innerHTML = '';

    pokemonList.forEach((pokemon, index) => {
        const id = index + 252; // PokeAPI empieza en 1
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `
            <img src="${imageUrl}" alt="${pokemon.name}">
            <h3>#${id} ${pokemon.name}</h3>
        `;
        dataContainer.appendChild(card);
    });
}

// -------------------------------------------------------
// FETCH
fetchBtn.addEventListener('click', () => {
    // TODO 1: Actualiza el texto de "status" a "Cargando con Fetch..."
    status.textContent = 'Cargando con Fetch...';

    fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=251')
        .then(response => {
            // TODO 2: Verifica si la respuesta es correcta con response.ok
            // Si no lo es, lanza un error con: throw new Error('Error en la solicitud')
            if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

            return response.json();
        })
        .then(data => {
            // TODO 3: Actualiza "status" con un mensaje que indique cuántos pokémon se obtuvieron
            // Pista: los pokémon están en data.results
            status.textContent = `Se obtuvieron ${data.results.length} pokémon.`;

            // TODO 4: Llama a renderPokemon() pasándole data.results
            renderPokemon(data.results);

        })
        .catch(error => {
            console.error('Error:', error);
            dataContainer.textContent = 'Hubo un error al obtener los datos.';
            status.textContent = 'Error con Fetch.';
        });
});

// -------------------------------------------------------
// AXIOS
axiosBtn.addEventListener('click', () => {
    // TODO 5: Actualiza el texto de "status" a "Cargando con Axios..."
    status.textContent = 'Cargando con Axios...';

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=30&offset=251')
        .then(response => {
            status.textContent = `Se obtuvieron ${response.data.results.length} pokémon.`;

            // TODO 4: Llama a renderPokemon() pasándole data.results
            renderPokemon(response.data.results);


            // TODO 6: Accede a los pokémon dentro de response.data
            // Recuerda: Axios ya convierte el JSON automáticamente, no necesitas .json()
            // Los pokémon están en response.data.results
            

            // TODO 7: Actualiza "status" con un mensaje que indique cuántos pokémon se obtuvieron

            // TODO 8: Llama a renderPokemon() pasándole los pokémon
        })
        
        .catch(error => {
            console.error('Error:', error);
            dataContainer.textContent = 'Hubo un error al obtener los datos.';
            status.textContent = 'Error con Axios.';
        });
});