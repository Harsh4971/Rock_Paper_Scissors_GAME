let userScore = 0;
let compScore = 0;

const userPoints = document.querySelector("#user-score");
const compPoints = document.querySelector("#comp-score");

let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

drawGame = () => {
    console.log("Game was Draw")
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You Win");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        userScore++;
        userPoints.innerText = userScore;
    }
    else {
        console.log("You Lose");
        msg.innerText = "You Lose.";
        msg.style.backgroundColor = "red";
        compScore++;
        compPoints.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log(`User Choice ${userChoice}`)
    //Genereate Computer Choice
    const compChoice = genCompChoice();
    console.log(`Computer Choice ${compChoice}`)

    if (userChoice === compChoice){
        drawGame();
        msg.innerText = "Draw.";
        msg.style.backgroundColor = "cornflowerblue"
    }
    else {
        userWin = true;
        if (userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});