let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const dispMsg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
  
const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game is draw");
    dispMsg.innerHTML = "Game is Draw! Play Again";
    dispMsg.style.backgroundColor = "orange";
}

const showWinner = (userWin, userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Have Won");
        dispMsg.innerHTML = `You Won, Your ${userChoice} beats ${compChoice}`;
        dispMsg.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Have Lost");
        dispMsg.innerHTML = `You Lost, ${compChoice} beats your ${userChoice}`;
        dispMsg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
        // Scissors, paper
        userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
        // rock, scissors
        userWin = compChoice === "scissors" ? false :  true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
        }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});