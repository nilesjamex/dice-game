var randomnumber1 = Math.random();
randomnumber1 = Math.floor(randomnumber1*6)+1;;

var randomdiceimage = "dice" + randomnumber1 + ".png";

var randomdiceimagesource = "images/" + randomdiceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomdiceimagesource);


var randomnumber2 = Math.random();
randomnumber2 = Math.floor(randomnumber2*6)+1;;

var randomdiceimagesource2 = "images/dice" + randomnumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", randomdiceimagesource2);

if (randomnumber1 > randomnumber2) {
document.querySelector('h1').innerHTML = "PLAYER 1 WINS"
}
else if (randomnumber2 > randomnumber1) {
  document.querySelector('h1').innerHTML = "PLAYER 2 WINS"
}
else {
  document.querySelector('h1').innerHTML = "DRAW"
}
