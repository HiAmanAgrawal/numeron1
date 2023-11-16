// Iteration 5: Store the player score and display it on the game over screen
var realscore = document.getElementById('score-box')
var playAgain = document.getElementById('play-again-button');
var score = localStorage.getItem('score')

realscore.innerText += score;
playAgain.onclick = () => {location.href = './game.html';}
