
var randomNumber1 = Math.ceil(6*Math.random()); 

var randomNumber2 = Math.ceil(6*Math.random()); 


var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";


function myFunction() {

    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
}


if ( randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if ( randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}