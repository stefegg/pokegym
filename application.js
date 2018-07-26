var last_known_scroll_position = 0;
var ticking = false;
// var ticking = true;

function enterGym() {
  document.getElementById("enter").classList.remove("bannerbefore");
  document.getElementById("enter").classList.add("bannerafter");
  document.getElementById("enterButton").classList.add("hidden2");
}

// window.addEventListener("scroll", enterGym());

var last_known_scroll_position = 0;
var ticking = false;
scroll_pos = last_known_scroll_position;

// if (scroll_pos >= 0) {
//   enterGym();}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      enterGym()
      ticking = false;
    });

    ticking = true;
  }

});

//this forces reload at start! weee

window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

trainerTaunt = {
  sT: 'Hi! I like shorts! They’re comfy and easy to wear! Whenever I’m feeling down after losing a battle, I just think, ‘At least I’ve still got my shorts!',
  bT: 'Poke Balls are round! The world is also round! Win or lose, Poke Balls remain round!',
  kT: 'Hmm. This is difficult. I was greedy and bought a lot of swimsuits but now I cant pick which one to wear.',
}

function dramaticReveal(scroll_pos) {
  scroll_pos = last_known_scroll_position;

  if (scroll_pos >= 0) {
    function revealContent() {
      content = document.getElementById('trainer1');
      content.classList.remove('hidden');
      content.classList.add('revealed');
      document.getElementById("tauntArea1").innerHTML = trainerTaunt.kT;
    }
    revealContent()
  }

  if (scroll_pos >= 550) {
    function revealContent2() {
      content = document.getElementById('trainer2');
      content.classList.remove('hidden');
      content.classList.add('revealed');
      document.getElementById("tauntArea2").innerHTML = trainerTaunt.bT;
    }
    revealContent2()
  }

  if (scroll_pos > 1150) {
    function revealContent3() {
      content = document.getElementById('trainer3');
      content.classList.remove('hidden');
      content.classList.add('revealed');
      document.getElementById("tauntArea3").innerHTML = trainerTaunt.sT;
    }
    revealContent3()

  }

}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    dramaticReveal();
  }

});
