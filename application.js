var last_known_scroll_position = 0;
var ticking = false;

function dramaticReveal(scroll_pos) {
  scroll_pos = last_known_scroll_position;
  // var ticking = true;

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
