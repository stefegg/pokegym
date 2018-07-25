pokeStuff = [];
stefStuff = [];
brianStuff = [];
karlStuff = [];

class Stefpokemon {
	constructor(pokemon){
      this.pokemon = pokemon;
		axios.get(`https://raw.githubusercontent.com/stefegg/pokegym/master/${this.pokemon}.json`)
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
		axios.get(`https://raw.githubusercontent.com/stefegg/pokegym/master/${this.pokemon}.json`)
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
		axios.get(`https://raw.githubusercontent.com/stefegg/pokegym/master/${this.pokemon}.json`)
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
stefFive = new Stefpokemon(565);
stefSix = new Stefpokemon(224);


karlOne : new Karlpokemon(747);
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

function iChooseyou(id){
  document.getElementById('pokename').innerHTML = teamStef[id].name;
  let pokeHp = teamStef[id].stats[5].base_stat;
  document.getElementById('hp').innerHTML = `Hit Points: ${pokeHp}`;
  let pokeAtk = teamStef[id].stats[4].base_stat;
  document.getElementById('attack').innerHTML = `Attack: ${pokeAtk}`;
  let pokeDef = teamStef[id].stats[3].base_stat;
  document.getElementById('defense').innerHTML = `Defense: ${pokeDef}`;
  let pokeMove = teamStef[id].moves[0].move.name.toUpperCase();
  let pokeMove2 = teamStef[id].moves[1].move.name.toUpperCase();
  document.getElementById('moves').innerHTML = `Moves: ${pokeMove} , ${pokeMove2}`;
}

trainerTaunt = {
  sOne: 'Hi! I like shorts! They’re comfy and easy to wear!',
  sTwo: 'Whenever I’m feeling down after losing a battle, I just think, ‘At least I’ve still got my shorts!',
  bOne: 'Poke Balls are round! The world is also round!',
  bTwo: 'Win or lose, Poke Balls remain round!',
  kOne: 'Hmm. This is difficult. I was greedy and bought a lot of swimsuits but now I cant pick which one to wear.',
  kTwo: 'images/' + 'haunter.png',
}
