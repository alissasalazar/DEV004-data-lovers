//Se crea la carta de cada pokemon
import { filterIdPok } from "./data.js";

export default function createCard(data, rootBody) {
  rootBody.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    rootBody.innerHTML += `<div id="cards"class="cardPokemon">

     <div class="face front"> 
    <h3 class="numCard"> ${data[i].num} </h3>
    <img class="imgCard" src="${data[i].img}" ></img>
   <h4 class="nameCard"> ${data[i].name}</h4>
    <h5 class="typeCard"> Type: ${data[i].type}</h5>
    <h5 class="hpCard"> Max HP : ${data[i].stats.max_hp}</h5>
    </div>

    <div class="face back"> 
    <img class="imgCard2" src="${data[i].img}" ></img>
   <h4 class="nameCard2"> ${data[i].name}</h4>
    <h5 class="About">About: ${data[i].about}</h5>
   </div>`;
  }

  //Mostrar más informacion sobre el pokemon//
  function allAboutPokemons(data, contaner) {
    contaner.innerHTML = "";
    contaner.innerHTML += `<div id="cards"class="cardPokemon2">
    <a><h3 class="numCard2"> ${data.num}</h3></a>
    <img class="imgCard2" src="${data.img}" ></img>
   <h4 class="nameCard2"> ${data.name}</h4>
    <h5 class="Resistant">Resistant: ${data.resistant}</h5>
    <h5 class="Weaknesses">Weaknesses: ${data.weaknesses}</h5> 
   </div>`;
  }

  const allPok = document.querySelectorAll(".numCard");
  for (let i = 0; i < allPok.length; i++) {
    allPok[i].addEventListener("click", function (p) {
      // //console.log(p);
      // console.log(p.target);
      const numPok = p.target.innerText;
      allAboutPokemons(filterIdPok(numPok), rootBody);
    });
  }
}
