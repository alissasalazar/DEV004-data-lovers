import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
let rootBody= document.getElementById("root");
function createCard(){
  for(let i=0; i<data.pokemon.length; i++){
    rootBody.innerHTML +=
 `<div class="cardPokemon">
 <img src="${data.pokemon[i].img}" class="imgCard"></img>
 <h3 class="numCard"> ${data.pokemon[i].num}</h3>
 <h4 class="nameCard"> ${data.pokemon[i].name}</h4>
 </div>`
  }

}
window.onload=createCard(data.pokemon);
