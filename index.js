var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";

let flagImg = '<img src="images/flag.png" style="width:5rem; height:auto;">';

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = `${flagImg} Player 1 Wins!`;
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = `Player 2 Wins! ${flagImg}`;
}
else {
    document.querySelector("h1").innerHTML = 'Draws!';
}