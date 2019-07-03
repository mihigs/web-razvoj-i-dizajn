var p1score = 0;
var p2score = 0;
var maxGames = 5;
var gameOver = false;

var btnPlayerOne = document.getElementById("playerOne");
var btnPlayerTwo = document.getElementById("playerTwo");
var restart = document.getElementById("restart");

var scoreP1 = document.getElementById("scoreP1");
var scoreP2 = document.getElementById("scoreP2");

btnPlayerOne.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        scoreP1.innerHTML = p1score;
        if(p1score>=maxGames){
            scoreP1.style.color = "green";
            scoreP2.style.color = "red";
            gameOver = true;
        }
    }
});
btnPlayerTwo.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        scoreP2.innerHTML = p2score;
        if(p2score>=maxGames){
            scoreP2.style.color = "green";
            scoreP1.style.color = "red";
            gameOver = true;
        }
    }
});

document.getElementById("numbOfGames").addEventListener("input", function(){
    maxGames = document.querySelector("input").value;
    document.querySelector("p").innerHTML = "Playing to: " + maxGames;
});

restart.addEventListener("click", function(){
    gameOver = false;
    p1score = 0;
    p2score = 0;
    scoreP1.style.color = "white";
    scoreP2.style.color = "white";
    scoreP1.innerHTML = p1score;
    scoreP2.innerHTML = p2score;
})

