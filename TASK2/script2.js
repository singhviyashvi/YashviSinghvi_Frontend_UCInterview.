let rNumber = Math.floor(Math.random()*100)+1; 
let lives=7; 
let prevGuess=[]; 

const guessButton=document.querySelector("#guessButton");
const userNum=document.querySelector("#userNum");
const hint=document.querySelector("#hint");
const result=document.querySelector("#result");
const livesLeft=document.querySelector("#lives");
const guessList=document.querySelector("#guessList");

//after 7 lives or if number matched
function end(){ 
    userNum.disabled=true;
    guessButton.disabled=true;
}

function clickingAction(){ 
    const guess=Number(userNum.value);
    prevGuess.push(guess);
    const listEl=document.createElement("li");
    listEl.innerText=guess;
guessList.append(listEl);

lives--;
livesLeft.innerText=lives;

if(guess===rNumber){ 
result.innerText="Congratulations!You win."
end();
}
else if(guess===0){ 
    result.innerText="No lives left!"
    end();
}
else{ 
    if(guess < rNumber)
        hint.innerText="Too low!";
      else if(guess > rNumber)
        hint.innerText="Too high!";

}
userNum.value="";}

guessButton.addEventListener("click", clickingAction);

   
