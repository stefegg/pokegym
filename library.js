pokeStuff = [];
stefStuff = [];
brianStuff = [];
karlStuff = [];

class Stefpokemon {
	constructor(pokemon){
      this.pokemon = pokemon;
		axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}/`)
		.then((response) => {
        pokeStuff = response.data;
        stefStuff.push(pokeStuff);
        stefStuff.sort(function (a, b) {
          return a.id - b.id;
        });
    })
	}
}

class Karlpokemon {
	constructor(pokemon){
      this.pokemon = pokemon;
		axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}/`)
		.then((response) => {
        pokeStuff = response.data;
        karlStuff.push(pokeStuff);
        karlStuff.sort(function (a, b) {
          return a.id - b.id;
        });
    })
	}
}

class Brianpokemon {
	constructor(pokemon){
      this.pokemon = pokemon;
		axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}/`)
		.then((response) => {
        pokeStuff = response.data;
        brianStuff.push(pokeStuff);
        brianStuff.sort(function (a, b) {
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

stefOne = new Stefpokemon(160);
stefTwo = new Stefpokemon(693);
stefThree = new Stefpokemon(230);
stefFour = new Stefpokemon(319);
stefFive = new Stefpokemon(656);
stefSix = new Stefpokemon(224);


karlOne : new Karlpokemon(748);
karlTwo : new Karlpokemon(222);
karlThree : new Karlpokemon(689);
karlFour : new Karlpokemon(366);
karlFive : new Karlpokemon(771);
karlSix : new Karlpokemon(121);


brianOne = new Brianpokemon(134);
brianTwo = new Brianpokemon(130);
brianThree = new Brianpokemon(131);
brianFour = new Brianpokemon(350);
brianFive = new Brianpokemon(367);
brianSix = new Brianpokemon(423);

Stef = new Trainer(stefStuff)
Karl = new Trainer(karlStuff)
Brian = new Trainer(brianStuff)
