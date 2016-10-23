console.log("JS file is connected to HTML! Woo!")

/* we no longer need this...
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
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

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var createBoard = function() {
  for (i = 0; i < cards.length; i++) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.setAttribute('data-card', cards[i]);
    newCard.addEventListener('click', isTwoCards);
    gameBoard.appendChild(newCard);
  }
};

var isTwoCards = function() {
  cardsInPlay.push(this.getAttribute('data-card'));
  //show the card's image - this is where I got stuck!
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'queen') {
    this.innerHTML = '<img src="queen.png" alt = "Queen of Clubs" />'
  }
  else {
    this.innerHTML = '<img src="king.png" alt = "King of Clubs" />'
  }
  //followed the rest from the assignment
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

var isMatch = function(cardsInPlay) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  }
  else {
    alert("Sorry, try again.");
  } 
};

createBoard();

