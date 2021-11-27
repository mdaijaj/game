
let score=10;
let highScore=0;
var audio= new Audio('/start.mp3')
audio.play()
// let winaudio= new Audio('./assets/win.mp3')
// let loseAudio= new Audio('./assets/lose.wav')
// let tap= new Audio('./assets/tap.mp3')

let secretNo= Math.floor((Math.random()*50)+1)
let guess=document.querySelector('.guess').textContent= '?';

audio.play();
document.querySelector('.check').addEventListener('click', ()=>{
    const guessNum= Number(document.querySelector('.guess').value);
    if(!guessNum){
        document.querySelector('.message').textContent= "No Number!"
    }
    else if(guessNum==secretNo){
        const currentScore=document.querySelector('.score').textContent=score;
        console.log("currentScore", currentScore)
        document.querySelector('.message').textContent= `Number match successfully!`;
        document.querySelector('.highscore').textContent= score;
        document.querySelector('.number').textContent= secretNo;
        document.querySelector('body').style.backgroundColor= "green"
    }
    else if(score<1){
        document.querySelector('.message').textContent= "Game over!"
        document.querySelector('body').style.backgroundColor= "red"

    }
    else if(guessNum>secretNo){
        score--
        const currentScore=document.querySelector('.score').textContent=score;
        console.log("currentScore", currentScore)
        document.querySelector('.message').textContent= "it should be less then your input!"
    }
    else if(guessNum<secretNo){
        score--
        const currentScore=document.querySelector('.score').textContent=score;
        console.log("currentScore", currentScore)
        document.querySelector('.message').textContent= "it should be greater then your input!"
    }
    else{
        document.querySelector('.message').textContent= "please carefull lock your account!"
    } 
})

//again work again
document.querySelector('.again').addEventListener('click', ()=>{
    score=10;
    let secretNo= Math.floor((Math.random()*50)+1)
    document.querySelector('body').style.backgroundColor= "gray"
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=score;
    document.querySelector('.highscore').textContent= highScore;
    document.querySelector('.guess').textContent= '';
    document.querySelector('.message').textContent= "Starting guesing number.";
})




