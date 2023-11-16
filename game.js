// Iteration 2: Generate 2 random number and display it on the screen

// Iteration 3: Make the options button functional

// Iteration 4: Build a timer for the game
var num1 = document.getElementById("number1");
var num2 = document.getElementById("number2");
var greaterthan = document.getElementById("greater-than");
var equalto = document.getElementById('equal-to');
var lesserthan = document.getElementById('lesser-than');
var score = 0;

var timer = document.getElementById('timer');
var time = 5;
var timerValue;

let number1 = Math.round(Math.random()*100);
let number2 = Math.round(Math.random()*100);

num1.innerText = number1;
num2.innerText = number2;

greaterthan.onclick = function(){greater()};
lesserthan.onclick = function(){lesser()};
equalto.onclick = function(){equal()};

function greater(){
    if(number1>number2){
        score++;
        number1 = Math.round(Math.random()*100);
        number2 = Math.round(Math.random()*100);
        num1.innerText = number1;
        num2.innerText = number2;
        reset(timerValue)
    }
    else{
        location.href='./gameover.html'
    }
}
function equal(){
    if(number1==number2){
        score++;
        number1 = Math.round(Math.random()*100);
        number2 = Math.round(Math.random()*100);
        num1.innerText = number1;
        num2.innerText = number2;
        reset(timerValue)
    }
    else{
        location.href='./gameover.html'
    }
}
function lesser(){
    if(number1<number2){
        score++;
        number1 = Math.round(Math.random()*100);
        number2 = Math.round(Math.random()*100);
        num1.innerText = number1;
        num2.innerText = number2;
        reset(timerValue)
    }
    else{
        location.href='./gameover.html'
    }
}


function timerGame() {
    time = 5
    timer.innerText = 5
    timerValue = setInterval(function () {
        time--
        if (time == 0) {
            location.href = './gameover.html'
        }
        timer.innerHTML = time
    }, 1000)
    localStorage.setItem("score", score);
}
timerGame()
function reset(timerId) {
    clearInterval(timerId)
    time=5;
    timerGame()
}
