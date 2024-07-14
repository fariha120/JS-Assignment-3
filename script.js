
function add(a, b) {
    return a + b;
}

const num1 = 4;
const num2 = 7;

const one = add(num1, num2);
console.log(one); 

const two = add(30 , 10);
console.log(two); 


// ------------------------

const descriptiveWords = [ "smart","clever","brilliant", "creative", "amazing", "talented", "hardworking", "incredible","active", "fantastic"];

function describeName() {
    const name = prompt("Please enter a name:");
    
    const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    const randomWord = descriptiveWords[randomIndex];

    console.log(name + " is " + randomWord);
}

describeName();

// ----------------------------

const num3 = 10;
const num4 = 5;

let operator = "+";

function calculate(a, b, operator) {
    if (operator === "-") {
        return a - b;
    } else {
        return a + b;
    }
}

console.log(calculate(num3, num4, operator));  

operator = "-";
console.log(calculate(num3, num4, operator)); 


// ---------------------------------------------

let prize = prompt("Please select a number between 0 and 10:");

prize = Number(prize);

let message = "You have won: ";

switch(prize) {
    case 0:
        message += "a cute pouch!";
        break;
    case 1:
    case 2:
        message += "a cool keychain!";
        break;
    case 3:
    case 4:
        message += "a fun toy!";
        break;
    case 5:
    case 6:
        message += "an interesting book!";
        break;
    case 7:
    case 8:
        message += "a trendy t-shirt!";
        break;
    case 9:
    case 10:
        message += "a valuable gift card!";
        break;
    default:
        message += "Sorry Try Again.";
}

alert(message); 

// --------------------------

let game = prompt("What number?");
game = Number(game);
let num = 100;
let message1 = "nothing";
  if (game > num) {
message1 = game + " was greater than " + num;
} else if (game === num) {
    message1 = game + " was equal to " + num;
} else {
message1 = game + " is less than " + num;
}
console.log(message1);
console.log(message1);



// ------------------------------------------------------------


const name = prompt("Enter a name:");
let message2;

switch (name) {
    case "Fatima":
    case "Areesha":
    case "Fiza":
        message2 = name + " is your friend.";
        break;
    default:
        message2 = "You don't know " + name + ".";
}

console.log(message2);

// -----------------------------------------------------------

const choice = ["Rock", "Paper", "Scissors"];
let computer = Math.floor(Math.random() * 3);
let player = Math.floor(Math.random() * 3);
let message4 = "player " + choice[player] + " vs computer " +
choice[computer] + " ";
   if (player === computer) {
message4 += "it's a tie";
}  else if (player > computer) {
   if (computer == 0 && player == 2) {
message4 += "Computer Wins";
}  else {
message4 += "Player Wins";
}
}  else {
   if (computer == 2 && player == 0) {
message4 += "Player Wins";
}  else {
    message4 += "Computer Wins";
}
}
alert(message4);