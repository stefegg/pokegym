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

function karlChooseyou(id){
  document.getElementById('pokename0').innerHTML = karlStuff[id].name;
  let pokeHp = karlStuff[id].stats[5].base_stat;
  document.getElementById('pokehp0').innerHTML = `Hit Points: ${pokeHp}`;
  let pokeAtk = karlStuff[id].stats[4].base_stat;
  document.getElementById('pokeattack0').innerHTML = `Attack: ${pokeAtk}`;
  let pokeDef = karlStuff[id].stats[3].base_stat;
  document.getElementById('pokedefense0').innerHTML = `Defense: ${pokeDef}`;
  let pokeMove = karlStuff[id].moves[0].move.name.toUpperCase();
  let pokeMove2 = karlStuff[id].moves[1].move.name.toUpperCase();
  document.getElementById('pokemoves0').innerHTML = `Moves: ${pokeMove} , ${pokeMove2}`;
};

function brianChooseyou(id){
  document.getElementById('pokename1').innerHTML = brianStuff[id].name;
  let pokeHp = brianStuff[id].stats[5].base_stat;
  document.getElementById('pokehp1').innerHTML = `Hit Points: ${pokeHp}`;
  let pokeAtk = brianStuff[id].stats[4].base_stat;
  document.getElementById('pokeattack1').innerHTML = `Attack: ${pokeAtk}`;
  let pokeDef = brianStuff[id].stats[3].base_stat;
  document.getElementById('pokedefense1').innerHTML = `Defense: ${pokeDef}`;
  let pokeMove = brianStuff[id].moves[0].move.name.toUpperCase();
  let pokeMove2 = brianStuff[id].moves[1].move.name.toUpperCase();
  document.getElementById('pokemoves1').innerHTML = `Moves: ${pokeMove} , ${pokeMove2}`;
};

function stefChooseyou(id){
  document.getElementById('pokename2').innerHTML = stefStuff[id].name;
  let pokeHp = stefStuff[id].stats[5].base_stat;
  document.getElementById('pokehp2').innerHTML = `Hit Points: ${pokeHp}`;
  let pokeAtk = stefStuff[id].stats[4].base_stat;
  document.getElementById('pokeattack2').innerHTML = `Attack: ${pokeAtk}`;
  let pokeDef = stefStuff[id].stats[3].base_stat;
  document.getElementById('pokedefense2').innerHTML = `Defense: ${pokeDef}`;
  let pokeMove = stefStuff[id].moves[0].move.name.toUpperCase();
  let pokeMove2 = stefStuff[id].moves[1].move.name.toUpperCase();
  document.getElementById('pokemoves2').innerHTML = `Moves: ${pokeMove} , ${pokeMove2}`;
};

function kPkmn1(){
  karlChooseyou(0);
};

function kPkmn2(){
  karlChooseyou(1);
};

function kPkmn3(){
  karlChooseyou(2);
};

function kPkmn4(){
  karlChooseyou(3);
};

function kPkmn5(){
  karlChooseyou(4);
};

function kPkmn6(){
  karlChooseyou(5);
};

function bPkmn1(){
  brianChooseyou(0);
};

function bPkmn2(){
  brianChooseyou(1);
};

function bPkmn3(){
  brianChooseyou(2);
};

function bPkmn4(){
  brianChooseyou(3);
};

function bPkmn5(){
  brianChooseyou(4);
};

function bPkmn6(){
  brianChooseyou(5);
};

function sPkmn1(){
  stefChooseyou(0);
};

function sPkmn2(){
  stefChooseyou(1);
};

function sPkmn3(){
  stefChooseyou(2);
};

function sPkmn4(){
  stefChooseyou(3);
};

function sPkmn5(){
  stefChooseyou(4);
};

function sPkmn6(){
  stefChooseyou(5);
};

trainerTaunt = {
  sOne: 'Hi! I like shorts! They’re comfy and easy to wear!',
  sTwo: 'Whenever I’m feeling down after losing a battle, I just think, ‘At least I’ve still got my shorts!',
  bOne: 'Poke Balls are round! The world is also round!',
  bTwo: 'Win or lose, Poke Balls remain round!',
  kOne: 'Hmm. This is difficult. I was greedy and bought a lot of swimsuits but now I cant pick which one to wear.',
}
