
let name= prompt("A name:");
let adjective = prompt("an adjective:");
let noun = prompt("A noun:");
let place = prompt("A place:");
let food = prompt("A food:");


function makeCard() {
console.log("Dear " + name + ",");
console.log("You are as " + adjective + " as a " + noun + ".");
console.log("Happy birthday from the generator.");
console.log("I know you will enjoy your " + food + " at " + place + "!");
}


function makeThankYouCard() {
	console.log("Dear " + name + ",");
	console.log("It is a" + adjective + " to receive your " + noun + "!");
	console.log("We will see you at: " + place + " for our " + food + ".");
	console.log("Kind regards, the generator.");
}

//comments out
setInterval(makeCard, 2000);
makeThankYouCard();
//makeCard();