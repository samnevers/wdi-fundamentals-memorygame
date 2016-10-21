console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* if (cardTwo === cardFour) {
	alert("Sorry, try again.")
}
	else if (cardOne === cardTwo) {
		alert("You found a match!")
	}
	else if (cardThree === cardFour) {
		alert("You found a match!")
	}
	else {
		alert("Sorry, try again.")
	} */

var gameBoard = document.getElementById('game-board');

var cards = 4;

var createCards = function() {
	for (i = 0; i < cards; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
};
