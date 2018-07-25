/*I commented out overflow: hidden on trainer-box and created <p id='tauntArea'></p> in the taunt div.*/

var i = 0;
var txt = 'Orgyarados has the largest member by far of any Pokemon. Known to explode Magikarp and Goldeen from the inside out...';
var speed = 35; //milliseconds for setTimeout

function typeTrainerText() { //show and display are both keywords, hence 'type'
    if (i < txt.length) {
    document.getElementById("tauntArea").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeTrainerText, speed);
  }
}
