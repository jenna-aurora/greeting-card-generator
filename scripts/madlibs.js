
let name = prompt("A name:");
let adjective = prompt("an adjective:");
let noun = prompt("a noun:");
let place = prompt("A place:");
let food = prompt("A food:");
let name1 = prompt("A name:");
let adjective1 = prompt("an adjective:");
let noun1 = prompt("a noun:");
let style = prompt("Fancy or silly?");




	function makeCard() {
  if (style.toLowerCase() === "fancy") {
    console.log("Dearest " + name + ",");
  } else {
    console.log("YO " + name + "!");
  }
  console.log("Dear " + name + ",");
  console.log("You are as " + adjective + " as a " + noun + ".");
	let random = randomNumber(0, closings.length - 1);
	 console.log("First closing", closings[0]);
	 console.log("Count of closings:", closings.length);
	//let requestedslot = 10;
	 //if (requestedSlot >= 0 && requestedSlot < closings.length) {
	 //console.log("closing at slot 10:", closings[requestedSlot]);
  //} else {
	  //console.log("slot 10 is out of range.");
  }
makeCard();


	function makeThankCard() {
  if (style.toLowerCase() === "fancy") {
    console.log("Dearest " + name + ",");
  } else {
    console.log("YO " + name1 + "!");
  }
  console.log("Dear " + name1 + ",");
  console.log("You are as " + adjective1 + " as a " + noun1 + ".");
	let random = randomNumber(0, closings.length - 1);
	 console.log("Last closing", closings[closings.length-1]);
	 console.log("Count of closings:", closings.length);
	//let requestedslot = 10;
	 //if (requestedSlot >= 0 && requestedSlot < closings.length) {
	 //console.log("closing at slot 10:", closings[requestedSlot]);
  //} else {
	 //console.log("slot 10 is out of range.");
  }
makeThankYouCard();



function makeCard() {
console.log("Dear " + name + ",");
console.log("You are as " + adjective + " as a " + noun + ".");
console.log("Happy birthday from the generator.");
console.log("I know you will enjoy your " + food + " at " + place + "!");
}

function makeThankYouCard() {
console.log("Dear " + name1 + ",");
	console.log("It is a " + adjective1 + " to receive your " + noun1 + "!");
	console.log("We will see you at: " + place + " for our " + food + ".");
	console.log("Kind regards, the generator.");
}



let closings = [
  "You are a legend.",
  "Stay golden.",
  "Signs point to awesome.",
];
function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
	setInterval(makeCard, 5000);
	setInterval(makeThankYouCard, 5000);
	makeCard();
	makeThankYouCard();
	

//comments out
