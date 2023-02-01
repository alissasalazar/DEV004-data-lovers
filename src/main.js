import data from './data/pokemon/pokemon.js';
let rootBody = document.getElementById("root");
function createCard(){
    for (let i =0; i<data.pokemon.length; i++){
        rootBody.innerHTML +=
        `<div class= "cardPokemon">
        <img src="${data.pokemon[i].img}" class="imgCard"></img>
        <h4 class= "numCard">#${data.pokemon[i].num}</h4>
        <h4 class="nameCard">${data.pokemon[i].name.charAt(0).toUpperCase()+data.pokemon[i].name.slice(1)}</h4>
       </div>`
    }
}

window.onload = createCard(data.pokemon);
