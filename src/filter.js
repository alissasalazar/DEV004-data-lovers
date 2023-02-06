import data from "./data/pokemon/pokemon.js";
//Filtramos el array, no puede hacerlo directo porque no son strings//
function filterTypesArray(types, value) {
  return types.filter((dato) => dato === value).length > 0 ? true : false;
}
//Ya entrando al array y teniendo en claro los valores del array,haremos otro filter//
export default function filterPok(value) {
  const pokeTypes = data.pokemon.filter((pok) =>
    filterTypesArray(pok.type, value)
  );
  //Colocamos el rootBody vacio para poder colocar la nueva información que requeriremos//
  //rootBody.innerHTML = " ";
  //Reutilizamos la funcion createCard y colocamos la nueva let de filter "pokeTypes"
  // createCar(pokeTypes,rootBody);
  console.log(`se le dio click a ${value}`, pokeTypes);
  return pokeTypes;
}
