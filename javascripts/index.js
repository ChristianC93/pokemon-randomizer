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

//Helper Functions
function randomId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function renderPokemon(pokemon) {
    //const pokemonDiv = document.createElement("div");
    const pokeImg = document.createElement("img");
    const pokeName = document.createElement("h3");
    const pokeId = document.createElement("p");
    const pokeType = document.createElement("ul");
    pokeImg.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
    pokeName.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    pokeId.innerText = `#${pokemon.id.toString().padStart(3, "0")}`
    pokeType.innerText = pokemonTypes(pokemon.types)
    pokemonDiv.append(pokeName, pokeImg, pokeId, pokeType)
    pokemonContainer.appendChild(pokemonDiv);     
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
        <p>${pokemonTypes(pokemon.types)}</p>
    </div>
    <footer>#${pokemon.id.toString().padStart(3, "0")}</footer>
    </article>` 
    pokemonDiv.innerHTML = pokemonCard;
    pokemonContainer.appendChild(pokemonDiv);
}



