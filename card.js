


alert("hello world");

let nameInput = document.getElementById("name");
let adjectiveInput = document.getElementById("adjective");
let nounInput = document.getElementById("noun");
let makeButton = document.getElementById("make-button");
let cardText = document.getElementById("card-text");
let cardSection = document.getElementById("card-section");
let closingText = document.getElementById("closing-text");
let bonusLine = document.getElementById("bonus-line");
let resetButton = document.getElementById("reset-button");
let tickLine = document.getElementById("tick-line");
let tickBonus = document.getElementById("tick-bonus");


let cardsMade = 0;	

let closings = [
  "You are a legend.",
  "Stay golden.",
  "Signs point to awesome.",
];

function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function surpriseMe() {
	let index = randomNumber(0, closings.length - 1);
	closingText.textContent = closings[index];
}

function makeCard() {
 cardSection.hidden = false;	  
  let aName = nameInput.value;
  let adj = adjectiveInput.value;
  let n = nounInput.value;
  cardText.textContent =
    "Dear " + aName + ", you are as " + adj +
    " as a " + n + ".";
	cardsMade = cardsMade + 1;
if (cardsMade >= 5) {
	//bonusLine.hidden = false;
 }
startTicking(); 
}
 
 
 let tickCount = 0;
let tickLimit = 10;
let tickIntervalID = null;

function startTicking() {
  tickCount = 0;
  tickLine.textContent = "Tick 0";
  tickBonus.hidden = true;

  tickIntervalID = setInterval(function () {
    tickCount++;
    tickLine.textContent = "Tick " + tickCount;

    if (tickCount === tickLimit) {
      clearInterval(tickIntervalID);
      tickBonus.textContent = "You have unlocked a secret bonus message!!";
      tickBonus.hidden = false;
	}
  }, 400);
}
 
 
function resetGenerator() {
  nameInput.value = "";
  adjectiveInput.value = "";
  nounInput.value = "";

  cardSection.hidden = true;
 
 clearInterval(tickIntervalID);
  tickLine.textContent = "";
  tickBonus.hidden = true;
  tickBonus.textContent = ""; 
}



makeButton.addEventListener("click", makeCard);
document.getElementById("surprise-button")
  .addEventListener("click", surpriseMe);
resetButton.addEventListener("click", resetGenerator);


cardSection.hidden = true;
//bonusLine.hidden = true;