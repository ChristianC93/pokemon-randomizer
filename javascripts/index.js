document.addEventListener("DOMContentLoaded", () => {
    pokemonButton.addEventListener('click', getrandomPokemon);

    
})
//NODE Getters
const pokemonContainer = document.querySelector("#pokemon-container");
const pokemonButton = document.querySelector("#get-pokemon");


//Helper Functions
function randomId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getrandomPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId(1,809)}`)
    .then(resp => resp.json())
    .then(pokemon => renderPokemon(pokemon))
}

function renderPokemon(pokemon) {
    const pokemonDiv = document.createElement("div");
    pokemonDiv.innerHTML = `
        ${pokemon.name}
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png">
    `
    pokemonContainer.appendChild(pokemonDiv);
     
}