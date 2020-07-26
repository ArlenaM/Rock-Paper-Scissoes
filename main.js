let userChoice;
let computerChoice;

//convert random number to rock, paper, or scissors 

function convertToRPS(){
	let number = Math.floor(Math.random()*100);
	if (number <= 33){
		computerChoice = "rock";
	} else if ((number >= 34) && (number <= 66)){
		computerChoice = "paper";
	} else if (number >= 67){
		computerChoice = "scissors";
	} 
	return computerChoice;
}

function captureUserChoice(){
	let rock= document.querySelector("#rock")
	rock.addEventListener("click", () => {
		return userChoice = "rock";
	})
	let paper = document.querySelector("#paper")
	paper.addEventListener("click", () => {
		return userChoice = "paper";
	})
	let scissors = document.querySelector("#scissors")
	scissors.addEventListener("click", () => {
		return userChoice = "scissors";
	})
}


//run the game and return the result of the game
function runGame(){
	convertToRPS();
	console.log("You chose: " + userChoice);
	console.log("The computer chose: " + computerChoice);
	let result
	if ((userChoice == "rock" && computerChoice == "scissors") || (userChoice == "paper" && computerChoice == "rock") || (userChoice == "scissors" && computerChoice == "paper")){
		result = "You win!";
	} else if ((userChoice == "paper" && computerChoice == "scissors") || (userChoice == "scissors" && computerChoice == "rock") || (userChoice == "rock" && computerChoice == "paper")){
		result = "The computer wins!";
	} else if ((userChoice == "scissors" && computerChoice == "scissors") || (userChoice == "rock" && computerChoice == "rock") || (userChoice == "paper" && computerChoice == "paper")){
		result ="It's a tie!"
	}
	return result;
	}

	
	//console.log(result);

	//runGame();
	//while loop to keep playing the game 

/* Bugs:
	
	-runGame() doesn't execute automatically
	-computerChoice returns 'undefined' the first time you play
	-playerChoice is always the first value the player chose
	-no way to handle the player entering something weird 

*/

/* 
User: R  Comp: S = user
User: P  Comp: R = user
User: S  Comp: P = user
User: P  Comp: S = comp
User: S  Comp: R = comp
User: R  Comp: P = comp
User: S  Comp: S = tie
User: R  Comp: R = tie
User: P  Comp: P = tie
*/