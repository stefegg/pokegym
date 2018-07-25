var last_known_scroll_position = 0;
var ticking = false;

function dramaticReveal(scroll_pos) {
  scroll_pos = last_known_scroll_position;
  // var ticking = true;


  trainerTaunt = {
    sOne: 'Hi! I like shorts! They’re comfy and easy to wear!',
    sTwo: 'Whenever I’m feeling down after losing a battle, I just think, ‘At least I’ve still got my shorts!',
    bOne: 'Poke Balls are round! The world is also round!',
    bTwo: 'Win or lose, Poke Balls remain round!',
    kOne: 'Hmm. This is difficult. I was greedy and bought a lot of swimsuits but now I cant pick which one to wear.',
  }

  if (scroll_pos > 0) {
    function revealContent() {
      content = document.getElementById('trainer1');
      content.classList.remove('hidden');
      content.classList.add('revealed');
    }
    revealContent()
  }

  if (scroll_pos > 550) {
    function revealContent2() {
      content = document.getElementById('trainer2');
      content.classList.remove('hidden');
      content.classList.add('revealed');
    }
    revealContent2()
  }

  if (scroll_pos > 1150) {
    function revealContent3() {
      content = document.getElementById('trainer3');
      content.classList.remove('hidden');
      content.classList.add('revealed');
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
