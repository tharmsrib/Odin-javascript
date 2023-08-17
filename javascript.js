function getComputerChoice(){
    // randomly return 'Rock' 'Paper' Scissor'
    let number = Math.ceil(Math.random()*3);
    if (number === 1){
        return 'rock'
    }else if(number === 2){
        return 'paper'
    }else{ //3
        return 'scissor'
    }

}



function play1Round(playerSelection,compterSelection){
    // The function should take two parameters - the playerSelection and computerSelection - and then 
    // make it all lower so it's not case sensitive
    let p_select = playerSelection.toLowerCase();
    let c_select = compterSelection.toLowerCase();
    
    if ((p_select.includes('rock') && c_select.includes('scissor')) || (p_select.includes('scissor') && c_select.includes('paper')) || (p_select.includes('paper') && c_select.includes('rock'))){
        // if win
        return 'you win! ' + p_select + ' beats ' + c_select    
    }else if(p_select==c_select){
        // for tie
        return 'Tied!'
    }else{
        return 'you loose! ' + c_select + ' beats ' + p_select
    }
    // return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
}



const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log('you chose: ' + playerSelection)
console.log('I chose: ' + computerSelection)

console.log(play1Round(playerSelection, computerSelection));