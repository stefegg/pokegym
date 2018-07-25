teamStef = [];
pokeStuff = [];

class Pokeball {
	constructor(pokemon){
      this.pokemon = pokemon;
		axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}/`)
		.then((response) => {
        pokeStuff = response.data;
        teamStef.push(pokeStuff);
        teamStef.sort(function (a, b) {
          return a.id - b.id;
        });
    })
	}
}

class Trainer {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }
  all() {
    return this.pokemon;
  }
  get(name) {
    for(let i = 0; i < this.pokemon.length; i++) {
      if(name === this.pokemon[i].name) {
        return this.pokemon[i];
      }
    }
  }
}

firePoke = new Pokeball(6);
groundPoke = new Pokeball(28);
ghostPoke = new Pokeball(93);
plantPoke = new Pokeball(103);
waterPoke = new Pokeball(117);
elecPoke = new Pokeball(135);
Stef = new Trainer(teamStef);
