let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const fire_div = document.getElementById("f");
const water_div = document.getElementById("w");
const grass_div = document.getElementById("g");

function getComputerChoice() {
    const choices = ['f', 'w', 'g'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "w") return "Water";
    if (letter === "f") return "Fire";
    return "Grass";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} + " beats " + ${convertToWord(computerChoice)}. + ". You Won!"`;
}

function lose(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} + " loses to " + ${convertToWord(computerChoice)}. + ". You Lost..."`;
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(userChoice)} + " equals " + ${convertToWord(computerChoice)}. + ". Its a Draw"`;
}






function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "gw":
        case "wf":
        case "fg":
         win(userChoice, ComputerChoice);
         break;
        case "wg":
        case "fw":
        case "gf":
            lose();
            break;
        case "ww":
        case "gg":
        case "ff":
            draw();
            break;
        
    
    } 
}



function main() {
fire_div.addEventListener('click', function() {
    game("f");

})

water_div.addEventListener('click', function() {
    game("w");
})

grass_div.addEventListener('click', function() {
    game("g")

})
}

main();