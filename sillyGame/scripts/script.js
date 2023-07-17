

let randomNumber = Math.floor(Math.random()*100)+1;
const userInput = document.querySelector(".userInput");
const submitButton = document.querySelector(".submitButton");
let gameCount = 1;
const HighorLow = document.querySelector(".highOrLow");
const gameResult = document.querySelector(".gameResult");
const restart = document.querySelector("button");
restart.disabled = true; 


function justFaking(){
      
}
submitButton.addEventListener('click', gameCheck);
function gameCheck(){
    const num = Number(userInput.value);
    if(num <= 100){
        if(gameCount === 10){
            gameResult.textContent = "You Lost!";
            setGame();
        }
        else if (num === randomNumber){
            gameResult.textContent = "You Won!";
            setGame(); 
        }
        else{
            if(num < randomNumber){
                HighorLow.textContent = "Your guess is too low!";

            }
            else{
                HighorLow.textContent = "Your guess is too high!";
            }
            
        }  
        gameCount ++;
        num = '';
    }
}

function checking(){
    let cnt = 0;
    const hso = document.querySelector("#id ,")
}
function setGame(){
    restart.disabled = false;
    userInput.disabled = true;
    submitButton.disabled = true;
    restart.addEventListener('clck', resetGame);
}
function resetGame(){
    randomNumber = Math.floor(Math.random()*100)+1;
    userInput.disabled = false;
    submitButton.disabled = false;
    HighorLow.textContent = '';
    gameResult.textContent = '';
    gameCount = 1;
    let a = 1;
}