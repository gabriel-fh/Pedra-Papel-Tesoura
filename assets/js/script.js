function game(){

    const rockBtn = document.querySelector(".rock");
    const papperBtn = document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors");
    
    rockBtn.addEventListener("click", play);
    papperBtn.addEventListener("click", play);
    scissorsBtn.addEventListener("click", play);

    const tryAgain = document.querySelector(".tryAgain");
    tryAgain.addEventListener("click", remove)
}

function play(event){
    const userChoice = event.target.classList.value;
    const choice = ['rock', 'paper', 'scissors'];
    const computerChoice = choice[Math.floor(Math.random() * choice.length)];
    let result;
    if((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')){
        result = "venceu";
    } else if(userChoice === computerChoice){
        result = "empate";
    } else{
        result = "perdeu";
    }
    finalResult(result, userChoice, computerChoice);
}


function finalResult(result, userChoice, computerChoice){
    remove();

    const userChoiceImg = document.querySelector("#userChoice");
    const computerChoiceImg = document.querySelector("#computerChoice");
    const finalResult = document.querySelector(".finalResult");

    choiceImg(userChoiceImg, computerChoiceImg, userChoice, computerChoice);

    announcement(result, finalResult)
}

function remove(){
    document.querySelector(".result-container").classList.toggle("hidden");
}

function choiceImg(userChoiceImg, computerChoiceImg, userChoice, computerChoice){
    userChoiceImg.src = `assets/images/${userChoice}.png`;
    userChoiceImg.title = userChoice;
    computerChoiceImg.src = `assets/images/${computerChoice}.png`;
    computerChoiceImg.title = computerChoice;
}

function announcement(result, finalResult){
    if(result === 'venceu'){
        finalResult.innerHTML = ' venceu';
        finalResult.style.color = 'green';
    }
    else if(result === 'perdeu'){
        finalResult.innerHTML = ' perdeu';
        finalResult.style.color = 'red';
    }
    else{
        finalResult.innerHTML = 'empate';
        finalResult.style.color = 'black';
    }
}

game();


