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
    let message = '';
    let p_score =0; let c_score =  0;
    if ((p_select.includes('rock') && c_select.includes('scissor')) || (p_select.includes('scissor') && c_select.includes('paper')) || (p_select.includes('paper') && c_select.includes('rock'))){
        // if win
        message = 'you win this round! ' + p_select + ' beats ' + c_select;  
        p_score++;  
    }else if(p_select==c_select){
        // for tie
        message = 'Tied!';
    }else{
        message = 'you loose this round! ' + c_select + ' beats ' + p_select;
        c_score++;
    }
    // return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" & what score to add
    return [message,[p_score,c_score]]
}

function game(){
    let p_score = 0; let c_score = 0;
    // let numRounds = prompt('How many rounds?');
    let numRounds = 5;
    let i_round = 0
    console.log(`Play best of ${numRounds} rounds`)
    while (i_round<numRounds){
        let playerSelection = prompt('Select Rock, Paper, or Scissor').toLowerCase(); //player input
        //check for valid response
        if (playerSelection.includes('rock')||playerSelection.includes('paper')||playerSelection.includes('scissor')){
            //make sure input only rock paper or scissor
            const computerSelection = getComputerChoice();  //computer selection
            //display slection
            console.log('you chose: ' + playerSelection)
            console.log('I chose: ' + computerSelection)
            //play & display
            let results = play1Round(playerSelection, computerSelection)
            let message = results[0];
            let score_add = results[1];
            console.log(message);
            // console.log(results);
            // add score
            p_score += score_add[0];
            c_score += score_add[1];
            console.log(`Score(you,me): ${p_score} - ${c_score}`)
            if(p_score===Math.ceil(numRounds/2) || c_score===Math.ceil(numRounds/2)){
                
                break;
            }
            i_round++
        }else{
            console.log('invalid input, do again!')
        }
        


    }
    if(p_score>c_score){
        console.log('AHH, You Win!!!');
    }else if(p_score<c_score){
        console.log('Ha, You Loose!!!'); 
    }else{
        console.log('Tied!!!');
    }

}

// create dom nodes for buttons
const buttons = document.querySelectorAll('button');
function displayPlayerSelection(e){
    // console.log(e);
    console.log(this.classList.value);
    // e.stopProgression();
}
buttons.forEach(button => {
    button.addEventListener('click',displayPlayerSelection)
});


