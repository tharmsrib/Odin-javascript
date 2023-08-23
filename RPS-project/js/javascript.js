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
    if(playerSelection!=null ||playerSelection!=undefined){

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
}

//initialize elements
// create dom nodes for buttons


//function
function getPlayerChoice(){
    //creaate vairable
    
    //select button node
    const buttons = document.querySelectorAll('button');
    //loop each button and add event listener from click
    buttons.forEach(button => {
        button.addEventListener('click',() => {
            //once clicked, store output variable with that button class value 
            playerSelection = button.classList.value;
            console.log(playerSelection);

            computerSelection = getComputerChoice();
            game();
            checkGameEnd();
            

        });


    });
    
};

function game(){
    

    // playerSelection = getPlayerChoice();
    // console.log(playerSelection);
    
    if(playerSelection!=null ||playerSelection!=undefined){

         //display slection
        console.log('you chose: ' + playerSelection)
        console.log('I chose: ' + computerSelection)
        //play & display
        let results = play1Round(playerSelection, computerSelection)
        let message = results[0];
        let score_add = results[1];
        console.log(message);
        messageText.textContent = message;
        // console.log(results);
        // add score
        p_score += score_add[0];
        c_score += score_add[1];
        pScoreText.textContent = `Player: ${p_score}`;
        cScoreText.textContent = `Computer: ${c_score}`;
        
        console.log(`Score(you,me): ${p_score} - ${c_score}`)
        
        
        i_round++

    }else{
        console.log('non select')
    }

}

function checkGameEnd(){
    if(p_score===numRounds || c_score === numRounds){
        if(p_score>c_score){
            console.log('AHH, You Win!!!');
            messageText.textContent = 'AHH, You Win!!!';
        }else if(p_score<c_score){
            console.log('Ha, You Loose!!!'); 
            messageText.textContent = 'Ha, You Loose!!!';
        }
    }
}


//create node for scores
const pScoreText = document.querySelector('#playerScore');
const cScoreText  = document.querySelector('.computerScore');
const messageText = document.querySelector('.message');
// console.log(pScoreText.textContent);
// console.log(cScoreText);


let p_score = 0; let c_score = 0;
// let numRounds = prompt('How many rounds?');
let numRounds = 5;
let i_round = 0
console.log(`Play best of ${numRounds} rounds`);
    // need somehow to not start this before pressing a button
let playerSelection;
let computerSelection;  //computer selection
       
getPlayerChoice();
// game();

   
    
    

