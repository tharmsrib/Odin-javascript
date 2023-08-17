function getComputerChoice(){
    // randomly return 'Rock' 'Paper' Scissor'
    let number = Math.ceil(Math.random()*3);
    if (number === 1){
        return 'rock'
    }else if(number === 2){
        return 'paper'
    }else{
        return 'scissor'
    }

}



// function play1Round(playerSelection,compterSelection){
//     // The function should take two parameters - the playerSelection and computerSelection - and then 
//     // make it all lower so it's not case sensitive
    
//     // return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// }