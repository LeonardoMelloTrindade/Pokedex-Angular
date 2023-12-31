type Pokemon = {
  name: string;
  pokedexNumber: number;
};

type PokemonWithType = {
  pokemon: Pokemon;
  type: string;
};

const pokedex: PokemonWithType[] = [
  { pokemon: { name: 'Bulbasaur', pokedexNumber: 1 }, type: 'Planta' },
  { pokemon: { name: 'Charmander', pokedexNumber: 4 }, type: 'Fogo' },
  { pokemon: { name: 'Squirtle', pokedexNumber: 7 }, type: 'Água' },
  { pokemon: { name: 'Chikorita', pokedexNumber: 152 }, type: 'Planta' },
  { pokemon: { name: 'Cyndaquil', pokedexNumber: 155 }, type: 'Fogo' },
  { pokemon: { name: 'Totodile', pokedexNumber: 158 }, type: 'Água' },
  { pokemon: { name: 'Treecko', pokedexNumber: 252 }, type: 'Planta' },
  { pokemon: { name: 'Torchic', pokedexNumber: 255 }, type: 'Fogo' },
  { pokemon: { name: 'Mudkip', pokedexNumber: 258 }, type: 'Água' },
  { pokemon: { name: 'Turtwig', pokedexNumber: 387 }, type: 'Planta' },
  { pokemon: { name: 'Chimchar', pokedexNumber: 390 }, type: 'Fogo' },
  { pokemon: { name: 'Piplup', pokedexNumber: 393 }, type: 'Água' },
  { pokemon: { name: 'Snivy', pokedexNumber: 495 }, type: 'Planta' },
  { pokemon: { name: 'Tepig', pokedexNumber: 498 }, type: 'Fogo' },
  { pokemon: { name: 'Oshawott', pokedexNumber: 501 }, type: 'Água' },
  { pokemon: { name: 'Chespin', pokedexNumber: 650 }, type: 'Planta' },
  { pokemon: { name: 'Fennekin', pokedexNumber: 653 }, type: 'Fogo' },
  { pokemon: { name: 'Froakie', pokedexNumber: 656 }, type: 'Água' },
  { pokemon: { name: 'Rowlet', pokedexNumber: 722 }, type: 'Planta' },
  { pokemon: { name: 'Litten', pokedexNumber: 725 }, type: 'Fogo' },
  { pokemon: { name: 'Popplio', pokedexNumber: 728 }, type: 'Água' },
  { pokemon: { name: 'Grookey', pokedexNumber: 810 }, type: 'Planta' },
  { pokemon: { name: 'Scorbunny', pokedexNumber: 813 }, type: 'Fogo' },
  { pokemon: { name: 'Sobble', pokedexNumber: 816 }, type: 'Água' },
  { pokemon: { name: 'Sizzlipede', pokedexNumber: 850 }, type: 'Fogo' },
  { pokemon: { name: 'Sandaconda', pokedexNumber: 844 }, type: 'Terra' },
  { pokemon: { name: 'Cramorant', pokedexNumber: 845 }, type: 'Voador' },
  { pokemon: { name: 'Arctozolt', pokedexNumber: 881 }, type: 'Elétrico' },
  { pokemon: { name: 'Duraludon', pokedexNumber: 884 }, type: 'Aço' },
  { pokemon: { name: 'Toxtricity', pokedexNumber: 849 }, type: 'Elétrico' },
  { pokemon: { name: 'Grapploct', pokedexNumber: 853 }, type: 'Lutador' },
];


export { pokedex, PokemonWithType, Pokemon };
