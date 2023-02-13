//Se crea la carta de cada pokemon
import {filterIdPok,
} from "./data.js";

export default function createCard(data, rootBody) {
  rootBody.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    rootBody.innerHTML += `<div id="cards"class="cardPokemon">
   <img class="imgCard"src="${data[i].img}" ></img>
   <h3 class="numCard"> ${data[i].num} </h3>
   <h4 class="nameCard"> ${data[i].name}</h4>
    <h5 class="typeCard"> ${data[i].type}</h5>
   </div>`;
  }

  //Mostrar más informacion sobre el pokemon//
  function allAboutPokemons(data, contaner) {
    contaner.innerHTML = "";
    contaner.innerHTML += `<div id="cards"class="cardPokemon">
   <img class="imgCard"src="${data.img}" ></img>
   <a><h3 class="numCard"> ${data.num}</h3></a>
   <h4 class="nameCard"> ${data.name}</h4>
    <h5 class="typeCard">SOBRE EL: ${data.about}</h5>
    <h5 class="typeCard">RESISTENTE A:${data.resistant}</h5>
    <h5 class="typeCard">DEBIL A: ${data.weaknesses}</h5> 
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
