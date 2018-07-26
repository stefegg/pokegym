var last_known_scroll_position = 0;
var ticking = false;
// var ticking = true;


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

      setTimeout(function() {
        document.getElementById('karlpic').classList.remove('hidden');
        document.getElementById('karlpic').classList.add('animated');
        document.getElementById('karlpic').classList.add('lightSpeedIn');
      }, 1000);


    }
    revealContent()
  }

  if (scroll_pos >= 650) {
    function revealContent2() {
      content = document.getElementById('trainer2');

      content.classList.add('revealed');
      document.getElementById("tauntArea2").innerHTML = trainerTaunt.bT;

      setTimeout(function() {
        document.getElementById('brianpic').classList.remove('hidden');
        document.getElementById('brianpic').classList.add('animated');
        document.getElementById('brianpic').classList.add('bounceInUp');
      }, 1000);
    }
    revealContent2()
  }

  if (scroll_pos > 1600) {
    function revealContent3() {
      content = document.getElementById('trainer3');
      content.classList.remove('hidden');
      content.classList.add('revealed');
      document.getElementById("tauntArea3").innerHTML = trainerTaunt.sT;
      setTimeout(function() {
        document.getElementById('stefpic').classList.remove('hidden');
        document.getElementById('stefpic').classList.add('animated');
        document.getElementById('stefpic').classList.add('zoomInLeft');
      }, 1000);
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
