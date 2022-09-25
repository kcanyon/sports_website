var ninjaButton = 314;
var ninjaScore = document.querySelector("#ninja-score");

function addninja() {
    ninjaButton++;
    ninjaScore.innerText = ninjaButton
}

var pirateButton = 159;
var pirateScore = document.querySelector("#pirate-score");

function addpirate() {
    pirateButton++;
    pirateScore.innerText = pirateButton
}

function gameOver() {
    alert("The Ninjas have won!")
}

setTimeout(gameOver, 13000)

function hide(element) {
    element.remove();
}