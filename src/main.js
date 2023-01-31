import data from './data/pokemon/pokemon.js';
let rootBody = document.getElementById("root");
function createCard(){
    for (let i =0; i<data.pokemon.length; i++){
        rootBody.innerHTML +=
        `<div class= "cardPokemon">
        <img src="${data.pokemon[i].img}" class="imgCard"></img>
        <h5 class= "numCard">${data.pokemon[i].num}</h5>
        <h5 class="nameCard">${data.pokemon[i].name}</h5>
       </div>`
    }
}

window.onload = createCard(data.pokemon);