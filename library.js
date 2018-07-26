pokeStuff = [];
stefStuff = [];
brianStuff = [];
karlStuff = [];

class Stefpokemon {
	constructor(pokemon){
      this.pokemon = pokemon;
		axios.get(`https://raw.githubusercontent.com/stefegg/pokegym/master/jsons/${this.pokemon}.json`)
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
		axios.get(`https://raw.githubusercontent.com/stefegg/pokegym/master/jsons/${this.pokemon}.json`)
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
		axios.get(`https://raw.githubusercontent.com/stefegg/pokegym/master/jsons/${this.pokemon}.json`)
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
stefThree = new Stefpokemon(319);
stefFour = new Stefpokemon(321);
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

function kPkmn(id){
	this.id = id;
  document.getElementById('pokename0').innerHTML = karlStuff[id].name.toUpperCase();
  let pokeHp = karlStuff[id].stats[5].base_stat;
  document.getElementById('pokehp0').innerHTML = `Hit Points: ${pokeHp}`;
  let pokeAtk = karlStuff[id].stats[4].base_stat;
  document.getElementById('pokeattack0').innerHTML = `Attack: ${pokeAtk}`;
  let pokeDef = karlStuff[id].stats[3].base_stat;
  document.getElementById('pokedefense0').innerHTML = `Defense: ${pokeDef}`;
  let pokeMove = karlStuff[id].moves[0].move.name.toUpperCase();
  let pokeMove2 = karlStuff[id].moves[1].move.name.toUpperCase();
  document.getElementById('pokemoves0').innerHTML = `Moves: ${pokeMove} , ${pokeMove2}`;
	let image = id;
	let y = document.getElementById('karlpokePic');
	y.src =`kimages/${image}.png`;
	y.classList.remove('animated');
	y.classList.remove('zoomIn');
	void y.offsetWidth;
	y.classList.add('animated');
	y.classList.add('zoomIn');
	var audio = document.getElementById("audio");
	audio.play();
};

function bPkmn(id){
	this.id = id;
  document.getElementById('pokename1').innerHTML = brianStuff[id].name.toUpperCase();
  let pokeHp = brianStuff[id].stats[5].base_stat;
  document.getElementById('pokehp1').innerHTML = `Hit Points: ${pokeHp}`;
  let pokeAtk = brianStuff[id].stats[4].base_stat;
  document.getElementById('pokeattack1').innerHTML = `Attack: ${pokeAtk}`;
  let pokeDef = brianStuff[id].stats[3].base_stat;
  document.getElementById('pokedefense1').innerHTML = `Defense: ${pokeDef}`;
  let pokeMove = brianStuff[id].moves[0].move.name.toUpperCase();
  let pokeMove2 = brianStuff[id].moves[1].move.name.toUpperCase();
  document.getElementById('pokemoves1').innerHTML = `Moves: ${pokeMove} , ${pokeMove2}`;
	let image = id;
	let y = document.getElementById('brianpokePic');
	y.src =`bimages/${image}.png`;
	y.classList.remove('animated');
	y.classList.remove('zoomIn');
	void y.offsetWidth;
	y.classList.add('animated');
	y.classList.add('zoomIn');
	var audio = document.getElementById("audio");
	audio.play();
};

function sPkmn(id){
	this.id = id;
  document.getElementById('pokename2').innerHTML = stefStuff[id].name.toUpperCase();
  let pokeHp = stefStuff[id].stats[5].base_stat;
  document.getElementById('pokehp2').innerHTML = `Hit Points: ${pokeHp}`;
  let pokeAtk = stefStuff[id].stats[4].base_stat;
  document.getElementById('pokeattack2').innerHTML = `Attack: ${pokeAtk}`;
  let pokeDef = stefStuff[id].stats[3].base_stat;
  document.getElementById('pokedefense2').innerHTML = `Defense: ${pokeDef}`;
  let pokeMove = stefStuff[id].moves[0].move.name.toUpperCase();
  let pokeMove2 = stefStuff[id].moves[1].move.name.toUpperCase();
  document.getElementById('pokemoves2').innerHTML = `Moves: ${pokeMove} , ${pokeMove2}`;
	let image = id;
	let y = document.getElementById('stefpokePic');
	y.src =`simages/${image}.png`;
	y.classList.remove('animated');
	y.classList.remove('zoomIn');
	void y.offsetWidth;
	y.classList.add('animated');
	y.classList.add('zoomIn');
	var audio = document.getElementById("audio");
	audio.play();
};
