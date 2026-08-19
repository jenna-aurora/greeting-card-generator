//let count = 0;

//function tick() {
	//count = count + 1;
	//console.log("Tick " + count);
//}


setInterval(tick, 1000);

let resetButton = document.getElementById("reset-button");
let tickLine = document.getElementById("tick-line");
let tickBonus = document.getElementById("tick-bonus");



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