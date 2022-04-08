document.addEventListener("DOMContentLoaded", () => {

    
})

function randomId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

function getrandomPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId(1,809)}`)
    .then(resp => resp.json())
    .then(data => console.log(data))
}