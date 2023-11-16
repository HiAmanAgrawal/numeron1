// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
var play_button = document.getElementById("play-button");
play_button.onclick = function(){play()}
function play (){
    location.href='./game.html';
}