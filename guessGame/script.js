// let winaudio= new Audio('./assets/win.mp3')
// let loseAudio= new Audio('./assets/lose.wav')
// let tap= new Audio('./assets/tap.mp3')
var audio= new Audio('/start.mp3')
let score=5;
let highScore=0;
let secretNo= Math.floor((Math.random()*50)+1)
let guess=document.querySelector('.guess').textContent= '?';


audio.play();
document.querySelector('.check').addEventListener('click', ()=>{
    const guessNum= Number(document.querySelector('.guess').value);
    if(!guessNum){
        document.querySelector('.message').textContent= "No Number!"
    }
    else if(guessNum==secretNo){
        document.querySelector('body').style.backgroundColor= "green"
        document.querySelector('.message').textContent= `Number match successfully!`;
        document.querySelector('.score').textContent=score;
        document.querySelector('.highscore').textContent= score;
        document.querySelector('.number').textContent= secretNo;
    }
    else if(score>1){
        document.querySelector('.message').textContent= 
        guessNum>secretNo? "it should be less then your input!" : "it should be greater then your input!";
        score--
        const currentScore=document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('.message').textContent= "Game over!"
        document.querySelector('body').style.backgroundColor= "red"
    } 
})

//again work again
document.querySelector('.again').addEventListener('click', ()=>{
    score=5;
    let secretNo= Math.floor((Math.random()*50)+1)
    document.querySelector('body').style.backgroundColor= "gray"
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=score;
    document.querySelector('.highscore').textContent= highScore;
    document.querySelector('.guess').textContent= '';
    document.querySelector('.message').textContent= "Starting guesing number.";
})




