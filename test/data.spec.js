import { filterPok, gensPok, orderPoke, filterIdPok } from "../src/data.js";

const dataPoke = [
  {
    num: "001",
    name: "bulbasaur",
    generation: {
      name: "kanto",
    },
    about:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    img: "https://www.serebii.net/pokemongo/pokemon/001.png",
    type: ["grass", "poison"],
    resistant: ["water", "electric", "grass", "fighting", "fairy"],
    weaknesses: ["fire", "ice", "flying", "psychic"],
  },
  {
    num: "002",
    name: "ivysaur",
    generation: {
      name: "kanto",
    },
    about:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    img: "https://www.serebii.net/pokemongo/pokemon/002.png",
    "pokemon-rarity": "normal",
    type: ["grass", "poison"],
    resistant: ["water", "electric", "grass", "fighting", "fairy"],
    weaknesses: ["fire", "ice", "flying", "psychic"],
  },
  {
    num: "167",
    name: "spinarak",
    generation: {
      name: "johto",
    },
    about:
      "The web spun by Spinarak can be considered its second nervous system. It is said that this Pokémon can determine what kind of prey is touching its web just by the tiny vibrations it feels through the web's strands.",
    img: "https://www.serebii.net/pokemongo/pokemon/167.png",
    type: ["bug", "poison"],
    resistant: ["grass", "fighting", "poison", "bug", "fairy"],
    weaknesses: ["fire", "flying", "psychic", "rock"],
  },
  {
    num: "168",
    name: "ariados",
    generation: {
      name: "johto",
    },
    about:
      "Ariados's feet are tipped with tiny hooked claws that enable it to scuttle on ceilings and vertical walls. This Pokémon constricts the foe with thin and strong silk webbing.",
    img: "https://www.serebii.net/pokemongo/pokemon/168.png",
    "pokemon-rarity": "normal",
    type: ["bug", "poison"],
    resistant: ["grass", "fighting", "poison", "bug", "fairy"],
    weaknesses: ["fire", "flying", "psychic", "rock"],
  },
  {
    num: "250",
    name: "ho-oh",
    generation: {
      name: "johto",
    },
    about:
      "Ho-Oh's feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.",
    img: "https://www.serebii.net/pokemongo/pokemon/250.png",
    "pokemon-rarity": "legendary",
    type: ["fire", "flying"],
    resistant: ["fighting", "bug", "grass", "steel", "fire", "fairy"],
    weaknesses: ["rock", "ground", "electric", "water"],
  },
  {
    num: "251",
    name: "celebi",
    generation: {
      name: "johto",
    },
    about:
      "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
    img: "https://www.serebii.net/pokemongo/pokemon/251.png",
    size: {
      height: "0.61 m",
      weight: "5.0 kg",
    },
    type: ["psychic", "grass"],
    resistant: ["water", "electric", "grass", "fighting", "ground"],
    weaknesses: ["fire", "ice", "poison", "flying"],
  },
];

// test//
describe("filterPok", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof filterPok).toBe("function");
  });

  it('deberia retornar los pokemones tipo "Grass" ', () => {
    expect(filterPok("grass", dataPoke)).toStrictEqual([
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          name: "kanto",
        },
        about:
          "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        type: ["grass", "poison"],
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
      },
      {
        num: "002",
        name: "ivysaur",
        generation: {
          name: "kanto",
        },
        about:
          "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
        img: "https://www.serebii.net/pokemongo/pokemon/002.png",
        "pokemon-rarity": "normal",
        type: ["grass", "poison"],
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
      },
      {
        num: "251",
        name: "celebi",
        generation: {
          name: "johto",
        },
        about:
          "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
        img: "https://www.serebii.net/pokemongo/pokemon/251.png",
        size: {
          height: "0.61 m",
          weight: "5.0 kg",
        },
        type: ["psychic", "grass"],
        resistant: ["water", "electric", "grass", "fighting", "ground"],
        weaknesses: ["fire", "ice", "poison", "flying"],
      },
    ]);
  });
});

describe("gensPok", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof gensPok).toBe("function");
  });

  it('deberia retornar los pokemones generacion "Kanto" ', () => {
    expect(gensPok("kanto", dataPoke)).toStrictEqual([
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          name: "kanto",
        },
        about:
          "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        type: ["grass", "poison"],
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
      },
      {
        num: "002",
        name: "ivysaur",
        generation: {
          name: "kanto",
        },
        about:
          "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
        img: "https://www.serebii.net/pokemongo/pokemon/002.png",
        "pokemon-rarity": "normal",
        type: ["grass", "poison"],
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
      },
    ]);
  });
});

describe("orderPoke", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof orderPoke).toBe("function");
  });

  it("deberia retornar los pokemones de a a la z ", () => {
    expect(orderPoke("abc", dataPoke)).toStrictEqual([
      {
        num: "168",
        name: "ariados",
        generation: {
          name: "johto",
        },
        about:
          "Ariados's feet are tipped with tiny hooked claws that enable it to scuttle on ceilings and vertical walls. This Pokémon constricts the foe with thin and strong silk webbing.",
        img: "https://www.serebii.net/pokemongo/pokemon/168.png",
        "pokemon-rarity": "normal",
        type: ["bug", "poison"],
        resistant: ["grass", "fighting", "poison", "bug", "fairy"],
        weaknesses: ["fire", "flying", "psychic", "rock"],
      },
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          name: "kanto",
        },
        about:
          "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        type: ["grass", "poison"],
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
      },
      {
        num: "251",
        name: "celebi",
        generation: {
          name: "johto",
        },
        about:
          "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
        img: "https://www.serebii.net/pokemongo/pokemon/251.png",
        size: {
          height: "0.61 m",
          weight: "5.0 kg",
        },
        type: ["psychic", "grass"],
        resistant: ["water", "electric", "grass", "fighting", "ground"],
        weaknesses: ["fire", "ice", "poison", "flying"],
      },
      {
        num: "250",
        name: "ho-oh",
        generation: {
          name: "johto",
        },
        about:
          "Ho-Oh's feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.",
        img: "https://www.serebii.net/pokemongo/pokemon/250.png",
        "pokemon-rarity": "legendary",
        type: ["fire", "flying"],
        resistant: ["fighting", "bug", "grass", "steel", "fire", "fairy"],
        weaknesses: ["rock", "ground", "electric", "water"],
      },
      {
        num: "002",
        name: "ivysaur",
        generation: {
          name: "kanto",
        },
        about:
          "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
        img: "https://www.serebii.net/pokemongo/pokemon/002.png",
        "pokemon-rarity": "normal",
        type: ["grass", "poison"],
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
      },
      {
        num: "167",
        name: "spinarak",
        generation: {
          name: "johto",
        },
        about:
          "The web spun by Spinarak can be considered its second nervous system. It is said that this Pokémon can determine what kind of prey is touching its web just by the tiny vibrations it feels through the web's strands.",
        img: "https://www.serebii.net/pokemongo/pokemon/167.png",
        type: ["bug", "poison"],
        resistant: ["grass", "fighting", "poison", "bug", "fairy"],
        weaknesses: ["fire", "flying", "psychic", "rock"],
      },
    ]);
  });
});

describe("orderPoke", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof orderPoke).toBe("function");
  });

  it("deberia retornar los pokemones de  z a la a  ", () => {
    expect(orderPoke("cba", dataPoke)).toStrictEqual([
      {
        num: "167",
        name: "spinarak",
        generation: {
          name: "johto",
        },
        about:
          "The web spun by Spinarak can be considered its second nervous system. It is said that this Pokémon can determine what kind of prey is touching its web just by the tiny vibrations it feels through the web's strands.",
        img: "https://www.serebii.net/pokemongo/pokemon/167.png",
        type: ["bug", "poison"],
        resistant: ["grass", "fighting", "poison", "bug", "fairy"],
        weaknesses: ["fire", "flying", "psychic", "rock"],
      },
      {
        num: "002",
        name: "ivysaur",
        generation: {
          name: "kanto",
        },
        about:
          "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
        img: "https://www.serebii.net/pokemongo/pokemon/002.png",
        "pokemon-rarity": "normal",
        type: ["grass", "poison"],
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
      },
      {
        num: "250",
        name: "ho-oh",
        generation: {
          name: "johto",
        },
        about:
          "Ho-Oh's feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.",
        img: "https://www.serebii.net/pokemongo/pokemon/250.png",
        "pokemon-rarity": "legendary",
        type: ["fire", "flying"],
        resistant: ["fighting", "bug", "grass", "steel", "fire", "fairy"],
        weaknesses: ["rock", "ground", "electric", "water"],
      },
      {
        num: "251",
        name: "celebi",
        generation: {
          name: "johto",
        },
        about:
          "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
        img: "https://www.serebii.net/pokemongo/pokemon/251.png",
        size: {
          height: "0.61 m",
          weight: "5.0 kg",
        },
        type: ["psychic", "grass"],
        resistant: ["water", "electric", "grass", "fighting", "ground"],
        weaknesses: ["fire", "ice", "poison", "flying"],
      },
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          name: "kanto",
        },
        about:
          "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        type: ["grass", "poison"],
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
      },
      {
        num: "168",
        name: "ariados",
        generation: {
          name: "johto",
        },
        about:
          "Ariados's feet are tipped with tiny hooked claws that enable it to scuttle on ceilings and vertical walls. This Pokémon constricts the foe with thin and strong silk webbing.",
        img: "https://www.serebii.net/pokemongo/pokemon/168.png",
        "pokemon-rarity": "normal",
        type: ["bug", "poison"],
        resistant: ["grass", "fighting", "poison", "bug", "fairy"],
        weaknesses: ["fire", "flying", "psychic", "rock"],
      },
    ]);
  });
});

describe("orderPoke", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof orderPoke).toBe("function");
  });

  it("deberia retornar los pokemones del menor al mayor", () => {
    expect(orderPoke("order1", dataPoke)).toStrictEqual(dataPoke);
  });
});

describe("orderPoke", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof orderPoke).toBe("function");
  });

  it("deberia retornar los pokemones del mayor al menor", () => {
    expect(orderPoke("order2", dataPoke)).toStrictEqual([
      {
        num: "251",
        name: "celebi",
        generation: {
          name: "johto",
        },
        about:
          "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
        img: "https://www.serebii.net/pokemongo/pokemon/251.png",
        size: {
          height: "0.61 m",
          weight: "5.0 kg",
        },
        type: ["psychic", "grass"],
        resistant: ["water", "electric", "grass", "fighting", "ground"],
        weaknesses: ["fire", "ice", "poison", "flying"],
      },
      {
        num: "250",
        name: "ho-oh",
        generation: {
          name: "johto",
        },
        about:
          "Ho-Oh's feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.",
        img: "https://www.serebii.net/pokemongo/pokemon/250.png",
        "pokemon-rarity": "legendary",
        type: ["fire", "flying"],
        resistant: ["fighting", "bug", "grass", "steel", "fire", "fairy"],
        weaknesses: ["rock", "ground", "electric", "water"],
      },
      {
        num: "168",
        name: "ariados",
        generation: {
          name: "johto",
        },
        about:
          "Ariados's feet are tipped with tiny hooked claws that enable it to scuttle on ceilings and vertical walls. This Pokémon constricts the foe with thin and strong silk webbing.",
        img: "https://www.serebii.net/pokemongo/pokemon/168.png",
        "pokemon-rarity": "normal",
        type: ["bug", "poison"],
        resistant: ["grass", "fighting", "poison", "bug", "fairy"],
        weaknesses: ["fire", "flying", "psychic", "rock"],
      },
      {
        num: "167",
        name: "spinarak",
        generation: {
          name: "johto",
        },
        about:
          "The web spun by Spinarak can be considered its second nervous system. It is said that this Pokémon can determine what kind of prey is touching its web just by the tiny vibrations it feels through the web's strands.",
        img: "https://www.serebii.net/pokemongo/pokemon/167.png",
        type: ["bug", "poison"],
        resistant: ["grass", "fighting", "poison", "bug", "fairy"],
        weaknesses: ["fire", "flying", "psychic", "rock"],
      },
      {
        num: "002",
        name: "ivysaur",
        generation: {
          name: "kanto",
        },
        about:
          "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
        img: "https://www.serebii.net/pokemongo/pokemon/002.png",
        "pokemon-rarity": "normal",
        type: ["grass", "poison"],
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
      },
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          name: "kanto",
        },
        about:
          "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        img: "https://www.serebii.net/pokemongo/pokemon/001.png",
        type: ["grass", "poison"],
        resistant: ["water", "electric", "grass", "fighting", "fairy"],
        weaknesses: ["fire", "ice", "flying", "psychic"],
      },
    ]);
  });
});
describe("filterIdPok", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof filterIdPok).toBe("function");
  });

  it("deberia retornar los pokemones de menor a mayo ", () => {
    expect(filterIdPok("001", dataPoke)).toStrictEqual({
      num: "001",
      name: "bulbasaur",
      generation: {
        name: "kanto",
      },
      about:
        "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      img: "https://www.serebii.net/pokemongo/pokemon/001.png",
      type: ["grass", "poison"],
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
    });
  });
});
