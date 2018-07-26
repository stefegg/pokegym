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

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
