let player_choice;
let computer_choice;


function playRound(player_choice, computer_choice){
    player_choice = playerSelection();
    computer_choice = getComputerChoice();

    console.log(player_choice);
    console.log(computer_choice);
    let result = document.getElementById("result");
    let result_description = document.getElementById("result-description");
    
    document.getElementById("computer-choice").innerHTML = computer_choice;

    if(player_choice != "rock" && player_choice != "paper" && player_choice != "scissors"){
        result.innerHTML = "Invalid Input";
        return;
    }
    if(player_choice === "rock"){
        if(computer_choice === "rock"){
            result.innerHTML = "Draw"
            result_description.innerHTML = "Rock ties with Rock";
        }
        else if(computer_choice === "paper"){
            result.innerHTML = "You Lose";
            result_description.innerHTML = "Paper Beats Rock";
        }
        else{
            result.innerHTML = "You Win";
            result_description.innerHTML = "Rock Beats Scissors";
        }
    }

    else if(player_choice === "paper"){
        if(computer_choice === "rock"){
            result.innerHTML = "You Win"
            result_description.innerHTML = "Paper beats Rock";
        }
        else if(computer_choice === "paper"){
            result.innerHTML = "Draw";
            result_description.innerHTML = "Paper ties with Paper";
        }
        else{
            result.innerHTML = "You Lose";
            result_description.innerHTML = "Scissors beat Paper";
        }
    }

    else{
        if(computer_choice === "rock"){
            result.innerHTML = "You Lose"
            result_description.innerHTML = "Rock beats Scissors";
        }
        else if(computer_choice === "paper"){
            result.innerHTML = "You Win";
            result_description.innerHTML = "Scissors beats Paper";
        }
        else{
            result.innerHTML = "Draw";
            result_description.innerHTML = "Scissors ties with Paper";
        }
    }
}

function playerSelection(){
    let player_choice = document.getElementById("choice").value;
    player_choice = player_choice.toLowerCase();
    return player_choice;
}

function getComputerChoice(){
    let computer_choice = Math.floor(Math.random() * 3);
    let opponent;
    if(computer_choice === 0){
        opponent = "rock";
    }
    else if(computer_choice === 1){
        opponent = "paper";
    }
    else{
        opponent = "scissors";
    }
    return opponent;
}
