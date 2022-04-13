document.addEventListener("DOMContentLoaded", () => {
    pokemonButton.addEventListener('click', getrandomPokemon);
    resetButton.addEventListener('click', resetDiv); 
})

//NODE Getters
const pokemonContainer = document.querySelector("#pokemon-container");
const pokemonButton = document.querySelector("#get-pokemon");
const resetButton = document.querySelector("#reset");


//Event Callback Functions
function getrandomPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId(1,809)}`)
    .then(resp => resp.json())
    .then(pokemon => renderPokemonCard(pokemon))
}

function resetDiv() {
    pokemonContainer.innerHTML = " ";
}

function highlightCard(e) {
    if (e.target.matches(".card")) {
        e.target.style.backgroundColor = "lightyellow"; 
    }
}

function normalizeCard(e) {
    if (e.target.matches(".card")) {
        e.target.style.backgroundColor = "";
    }
}

//Helper Functions
function randomId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function pokemonTypes(typesArray) {
    const types = typesArray.map(element => {
        return element.type.name[0].toUpperCase() + element.type.name.slice(1);
    });
    if (types.length === 2) {
        return types[0] +  "/"  + types[1];
    } else {
        return types[0];
    };  
}

function renderPokemonCard(pokemon) {
    const pokemonDiv = document.createElement("div"); 
    const pokemonCard = ` <article class="card">
    <header>
        <h2>${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
    </header>
    <div class="image-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}">
    </div>
    <div class="content">
        <p>#${pokemon.id.toString().padStart(3, "0")}</p>
        <button id="heart-button">
        <span id="icon"><i class="material-icons">favorite_border</i></span>
        </button>
    </div>
    <footer>${pokemonTypes(pokemon.types)}</footer>
    </article>`
    pokemonDiv.innerHTML = pokemonCard;
    pokemonDiv.addEventListener("mouseover", highlightCard);
    pokemonDiv.addEventListener("mouseout", normalizeCard);
    pokemonContainer.appendChild(pokemonDiv);
}



