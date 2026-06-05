let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#your-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;

        const compChoice = getCompChoice();

        const result = determineWinner(userChoice, compChoice);

        updateScore(result);

        displayResult(result, userChoice, compChoice);
    });
});

function getCompChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function determineWinner(userChoice, compChoice) {

    if (userChoice === compChoice) {
        return "draw";
    }

    if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        return "user";
    }

    return "comp";
}

function updateScore(result) {

    if (result === "user") {
        userScore++;
        userScorePara.textContent = userScore;
    }

    else if (result === "comp") {
        compScore++;
        compScorePara.textContent = compScore;
    }
}

function displayResult(result, userChoice, compChoice) {

    if (result === "draw") {
        msg.innerText =
            `Draw! Both chose ${userChoice}`;
        msg.style.backgroundColor = "#670aa1";
    }

    else if (result === "user") {
        msg.innerText =
            `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }

    else {
        msg.innerText =
            `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}