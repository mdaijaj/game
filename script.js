// getting elements
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score = document.querySelector('#score--0');
const current = document.getElementById('current--0');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dices = document.querySelector('.dice');

//initial setup
score.textContent = 0;
score[0, 0]
activePlayer = 0;
currentScore = 0;
playing = true;



let diceRandomNo;
dices.classList.add('hidden');
btnRoll.addEventListener('click', function () {
    diceRandomNo = Math.trunc(Math.random() * 6) + 1;  //generate random number
    if (diceRandomNo <= 20) {
        dices.classList.remove('hidden');
        dices.src = `public/dice-${diceRandomNo}.png`;    //displace dice

        if (diceRandomNo !== 1) {
            // console.log("diceRandomNo", diceRandomNo)
            currentScore += diceRandomNo
            console.log("activePlayer", activePlayer)
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            //if dice is 1 then switch player
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            activePlayer = activePlayer === 0 ? 1 : 0;
            player1.classList.toggle('player--active')
            player2.classList.toggle('player--active')
        }
    }else{
        playing=false
    }

})


btnHold.addEventListener('click', function () {
    if (playing) {
        console.log(activePlayer, "activePlayer")
        console.log("currentScore", currentScore)
        currentScore += diceRandomNo - diceRandomNo
        let scoreplayer = document.getElementById(`score--${activePlayer}`).textContent
        let intvalue = parseInt(scoreplayer)
        intvalue += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = intvalue;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player1.classList.toggle('player--active')
        player2.classList.toggle('player--active')

        // currentScore=0; 
        console.log("intvalue", intvalue)

        if (intvalue > 20) {
            playing = false;
            activePlayer = activePlayer === 0 ? 1 : 0;
            // document.querySelector(`player player--0`).style.background= 'black';
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            dices.classList.add('hidden');
        }
    }
})


// add functionality
// if 100>score then win player1 colour green 
// 70 roldice win player 
// terminate Game
// newgame reset all thing
// add sound
// player name promted both
