// getting elements
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score = document.querySelector('#score--0');
const current = document.getElementById('current--0');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const dices = document.querySelector('.dice');

// console.log(player1,
//  player2,
//  score1, 
//  score2, 
//  current1,
//  current2,
//  btnNew, 
//  btnRoll,
//  btnHold,
//  dices) 

//initial setup
// score.textContent=0;
score[0,0]
activePlayer=0;
currentScore=0;
playing=true;

dices.classList.add('hidden');
// console.log("aijajdices2", dices)

btnRoll.addEventListener('click', function(){
        //generate random number
    const diceRandomNo= Math.trunc(Math.random()*6)+1;
    dices.classList.remove('hidden');
        //displace dice
    dices.src= `public/dice-${diceRandomNo}.png`;

    if(diceRandomNo!==1){
        console.log("diceRandomNo", diceRandomNo)
        currentScore+=diceRandomNo
        console.log("activePlayer", activePlayer)
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }else{
    //if dice is 1 then switch player
        currentScore=0; 
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        activePlayer= activePlayer  === 0 ? 1 : 0;
        player1.classList.toggle('player--active')
        player2.classList.toggle('player--active')
    }
})

btnHold.addEventListener('click', function(){
    if(playing){
    // console.log("score1", score1)
    // console.log("currentScore", currentScore)
    // score.textContent=currentScore
    score[activePlayer]+= currentScore
    console.log("score", score)
    let datas=document.getElementById(`score--${activePlayer}`).textContent=currentScore;
    console.log("datas", datas)
    score[activePlayer];
        if(score=>100){
            playing=false;
            score==100
        }
    }
})


// approve get expert 
// moc cordinator from user list any
// moc team from user list any


// bar status when u in implement initial not show 

// doubt
// classList



// done color green
// toggle
