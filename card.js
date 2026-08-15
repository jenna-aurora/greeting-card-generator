
alert("hello world");

let A name = document.getElementById("name");
let An adjective = document.getElementById("adjective");
let A noun = document.getElementById("noun");
let makeButton = document.getElementById("make-button");
let cardText = document.getElementById("card-text");

function makeCard() {
  let cardSection = document.getElementById("card-section");
	cardSection.hidden = false;
  let A name = "name".value;
  let An adjective = "adjective".value;
  let A noun = "noun".value;
  cardText.textContent =
    "Dear " + name + ", you are as " + adjective +
    " as a " + noun + ".";
	cardsMade = cardsMade + 1;
if (cardsMade >= 5) {
  bonusLine.hidden = false;
 }
}
makeButton.addEventListener("click", makeCard);



let surpriseButton = document.getElementById("surprise-button");

function surpriseMe() {
  let index = randomNumber(0, closings.length - 1);
  closingText.textContent = closings[index];
}

surpriseButton.addEventListener("click", surpriseMe);

function surpriseMe() {
  makeCard();
  setInterval(makeCard, 5000);
  setInterval(surpriseMe, 5000);
}
let cardsMade = 0;

function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

