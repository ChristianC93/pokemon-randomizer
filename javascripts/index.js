document.addEventListener("DOMContentLoaded", () => {
    pokemonButton.addEventListener('click', getrandomPokemon);
    resetButton.addEventListener('click', resetDiv);

    
})
//NODE Getters
const pokemonContainer = document.querySelector("#pokemon-container");
const pokemonButton = document.querySelector("#get-pokemon");
const resetButton = document.querySelector("#reset");


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
    const pokeImg = document.createElement("img")
    const pokeName = document.createElement("h3")
    const pokeId = document.createElement("p")
    const pokeType = document.createElement("ul")
    pokeImg.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
    pokeName.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    pokeId.innerText = `#${pokemon.id}`
    pokeType.innerText = pokemonTypes(pokemon.types)
    pokemonDiv.append(pokeName, pokeImg, pokeId, pokeType)
    pokemonContainer.appendChild(pokemonDiv);     
}

function pokemonTypes(typesArray) {
    if (typesArray.length === 2) {
        const dualType = (typesArray[0].type.name, typesArray[1].type.name);
        return dualType
    } else {
        return typesArray[0].type.name;
    }
}

function resetDiv() {
    pokemonContainer.innerHTML = " ";
}