
//let name= prompt("A name:");
//let adjective = prompt("an adjective:");
//let place = prompt("A place:");
//let food = prompt("A food:");



//function makeCard() {
//console.log("Dear " + name + ",");
//console.log("You are as " + adjective + " as a " + noun + ".");
//console.log("Happy birthday from the generator.");
//console.log("I know you will enjoy your " + food + " at " + place + "!");
//}


//function makeThankYouCard() {
//console.log("Dear " + name + ",");
	//console.log("It is a" + adjective + " to receive your " + noun + "!");
	//console.log("We will see you at: " + place + " for our " + food + ".");
	//console.log("Kind regards, the generator.");
//}

//comments out
//setInterval(makeCard, 2000);
//makeThankYouCard();
//makeCard();

let name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");
let style = prompt("Fancy or silly?");


let closings = [
  "You are a legend.",
  "Stay golden.",
  "Signs point to awesome.",
];

function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}


	function makeCard() {
  if (style.toLowerCase() === "fancy") {
    console.log("Dearest " + name + ",");
  } else {
    console.log("YO " + name + "!");
  }
  // ...rest of the card unchanged

  console.log("Dear " + name + ",");
  console.log("You are as " + adjective + " as a " + noun + ".");
  let index = randomNumber(0, closings.length - 1);
  console.log(closings[index]);
}

makeCard();
