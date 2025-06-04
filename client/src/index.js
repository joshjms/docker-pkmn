const apiUrl = process.env.API_URL;

const container = document.getElementById('pokemon-container');
const errorMessage = document.getElementById('error-message');

if (!apiUrl || typeof apiUrl !== 'string') {
    errorMessage.textContent = '⚠️ API_URL is not defined. Check your .env file.';
} else {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not OK (status ${response.status})`);
            }
            return response.json();
        })
        .then((data) => {
            if (!Array.isArray(data)) {
                throw new Error('API did not return an array');
            }
            renderPokemons(data);
        })
        .catch((err) => {
            console.error(err);
            errorMessage.textContent = '⚠️ Error fetching data: ' + err.message;
        });
}

function renderPokemons(pokemonArray) {
    container.innerHTML = ''; // clear any previous content

    if (pokemonArray.length === 0) {
        container.innerHTML = '<p style="text-align:center;">No Pokémon found.</p>';
        return;
    }

    pokemonArray.forEach((item) => {
        if (!item.name || !item.image) return;

        const card = document.createElement('div');
        card.classList.add('pokemon-card');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.onerror = () => {
            img.src = '';
            img.alt = 'Image failed to load';
        };

        const nameEl = document.createElement('div');
        nameEl.classList.add('pokemon-name');
        nameEl.textContent = item.name;

        card.appendChild(img);
        card.appendChild(nameEl);
        container.appendChild(card);
    });
}
