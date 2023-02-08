//en la funcion createCard no colocabamos parametro porque no lo ibamos a reutilizar, ahora que lo reutilizaremos colocamos el parametro//
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
}
