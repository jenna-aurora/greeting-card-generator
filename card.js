

alert("hello world");
//<button type= alert("click") id="makeCard">Make my card</button>
let nameInput = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");
let makeButton = document.getElementById("make-button");
let cardText = document.getElementById("card-text");

function makeCard() {
  let friendName = nameInput.value;
  let adjective = adjectiveInput.value;
  let noun = nounInput.value;
  cardText.textContent =
    "Dear " + friendName + ", you are as " + adjective +
    " as a " + noun + ". Happy birthday from the generator.";
}

makeButton.addEventListener("click", makeCard);
