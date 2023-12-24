
function playRound(){

}

function playerSelection(){
    
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
console.log(getComputerChoice());