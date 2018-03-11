var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector ('.dice').style.display = 'none';											// For not showing the dice picture at the start of the game

document.getElementById ('score-0').textContent = '0';
document.getElementById ('score-1').textContent = '0';
document.getElementById ('current-0').textContent = '0';
document.getElementById ('current-1').textContent = '0';

document.querySelector ('.btn-roll').addEventListener ('click', function() {						// anonymous function - which we can't use outside anywhere except this selector

	// 1. Random Number
	var dice = Math.floor(Math.random() * 6 ) + 1;													// Random Dice Number Generate

	// 2. Display Result
	var diceDOM = document.querySelector ('.dice');
	diceDOM.style.display = 'block';																// For showing the dice picture after the dice rolls
	diceDOM.src = 'dice-' + dice + '.png';

	// 3. Update the Round Score IF the rolled number was NOT a 1
	if ( dice !== 1){
		// ADD Score
		roundScore += dice;
		document.querySelector ('#current-' + activePlayer).textContent = roundScore;
	} else {
		// Next Player
		nextPlayer();
	}
});

document.querySelector ('.btn-hold').addEventListener ('click', function(){

	// Add CURRENT Score to GLOBAL Score
	scores[activePlayer] += roundScore;

	// Update the UI
	document.querySelector ('#score-' + activePlayer).textContent = scores[activePlayer];

	// Check IF the player WON the game
	if (scores[activePlayer] >= 20) {
		document.querySelector ('#name-' + activePlayer).textContent = 'WINNER !';
		document.querySelector ('.dice').style.display = 'none';
		document.querySelector ('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector ('.player-' + activePlayer + '-panel').classList.remove('active');
	} else {
		// Next Player
	nextPlayer();
	}

});


function nextPlayer(){
	// Next Player
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;									// Ternary Operator - A clean and simple version of IfElse
		roundScore = 0;

		document.getElementById ('current-0').textContent = '0';
		document.getElementById ('current-1').textContent = '0';

		document.querySelector ('.player-0-panel').classList.toggle ('active');
		document.querySelector ('.player-1-panel').classList.toggle ('active');

		//document.querySelector ('.player-0-panel').classList.remove ('active');
		//document.querySelector ('.player-1-panel').classList.add ('active');

		document.querySelector ('.dice').style.display = 'none';
}


/*
document.querySelector ('#current-' + activePlayer).textContent = dice;								// setter - sets a value
document.querySelector ('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#score-0').textContent;												// getter - gets a value
console.log(x);																						// just an example

function btn() {
	// Do something
}
btn();

document.querySelector ('.btn-roll').addEventListener ('click', btn);								// Here, 'btn' is a callback function
*/