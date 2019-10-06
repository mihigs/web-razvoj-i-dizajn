//global variables
var squareArray = document.getElementsByClassName("square");
var correctIndex = 0;
var correctColor = "rgb(38, 74, 121)";
var currentColor = "rgb(38, 74, 121)";
var correctColorArray = [38, 74, 121];
var progressBar = document.querySelectorAll(".progress-bar")[0];
document.querySelectorAll(".progress-bar")[0].style.width = "0px";

//randomising
var red, green, blue, correctIndex;
var correctRed, correctGreen, correctBlue;
var header = document.getElementsByClassName("header")[0];
var headerRGB = document.getElementsByTagName("h1")[0];
function randomise() {
    red = Math.ceil(Math.random() * 255);
    setTimeout(function () { }, 30);
    green = Math.ceil(Math.random() * 255);
    setTimeout(function () { }, 30);
    blue = Math.ceil(Math.random() * 255);
    correctColorArray = [red, green, blue];
}
function generateCorrectAnswer() {
    correctRed = Math.ceil(Math.random() * 255);
    correctGreen = Math.ceil(Math.random() * 255);
    correctBlue = Math.ceil(Math.random() * 255);
    correctColor = "rgb(" + correctRed + "," + correctGreen + "," + correctBlue + ")";
}
function generateNewSquares() {
    correctIndex = Math.floor(Math.random() * noOfSquares);
    refreshListeners();
    generateCorrectAnswer();

    headerRGB.innerHTML = correctColor.toUpperCase();
    for (var i = 0; i < noOfSquares; i++) {
        randomise();
        squareArray[i].classList.remove("square-incorrect", "square-correct", "white");

        if (i == correctIndex) {
            squareArray[i].style.background = correctColor;
        } else {
            squareArray[i].style.background = "rgb(" + red + "," + green + "," + blue + ")";
        }
    }
}



//clicking on squares
var incorrectAnswersCounter = 0;
function updateStyle(){
    currentColor = correctColor;
    header.style.background = currentColor;
    progressBar.style.background = currentColor;
    newColorsButton.style.color = currentColor;
    // if (correctColorArray[0] + correctColorArray[1] + correctColorArray[2] > 385)
    //     header.classList.add("header-black");
    // else header.classList.remove("header-black");
    if (hardMode) {
        hardButton.style.background = currentColor;
        hardButton.style.color = "white";
        easyButton.style.color = currentColor;
    }
    else {
        easyButton.style.background = currentColor;
        easyButton.style.color = "white";
        hardButton.style.color = currentColor;
    }
    for (var i = 0; i < noOfSquares; i++) {
        document.querySelectorAll(".square")[i].style.background = currentColor;
        document.querySelectorAll(".square")[i].removeEventListener("click", correctAnswer);
        document.querySelectorAll(".square")[i].removeEventListener("click", incorrectAnswer);
    }
}
// correct and incorrect answers
var squaresClickedOn = [0];
function correctAnswer() {
    updateScore();
    updateStyle();
    setTimeout(increaseProgress,500)
    setTimeout(function(){
        for (var i = 0; i < noOfSquares; i++) {
            document.querySelectorAll(".square")[i].classList.add("square-correct")
        }
        setTimeout(generateNewSquares, 500);
    },500);
    
}
function incorrectAnswer() {
    incorrectAnswersCounter++;
    this.className
    this.classList.add("square-incorrect");
}
//refreshing listeners
function refreshListeners() {
    for (var i = 0; i < noOfSquares; i++) {
        document.querySelectorAll(".square")[i].removeEventListener("click", correctAnswer);
        document.querySelectorAll(".square")[i].removeEventListener("click", incorrectAnswer);
        if (i == correctIndex) {
            document.querySelectorAll(".square")[i].addEventListener("click", correctAnswer);
        } else {
            document.querySelectorAll(".square")[i].addEventListener("click", incorrectAnswer);
        }

    }
}

//buttons
var hardButton = document.getElementById("hard-button");
var easyButton = document.getElementById("easy-button");
var newColorsButton = document.getElementById("new-colors-button");
var hardMode = true;
var noOfSquares = 6;

function switchToEasyMode(){
    noOfSquares = 3;
    document.getElementById("no4").classList.toggle("square-easy-mode");
    document.getElementById("no5").classList.toggle("square-easy-mode");
    document.getElementById("no6").classList.toggle("square-easy-mode");
    generateNewSquares();
}
function switchToHardMode(){
    noOfSquares = 6;
    document.getElementById("no4").classList.toggle("square-easy-mode");
    document.getElementById("no5").classList.toggle("square-easy-mode");
    document.getElementById("no6").classList.toggle("square-easy-mode");
    generateNewSquares();
}

hardButton.style.background = currentColor;
hardButton.style.color = "white";
hardButton.addEventListener("click", function () {
    if (!hardMode) {
        switchToHardMode();
        hardMode = true;
        hardButton.style.background = easyButton.style.background;
        hardButton.style.color = easyButton.style.color;
        easyButton.style.background = "white";
        easyButton.style.color = currentColor;
    }
});
easyButton.addEventListener("click", function () {
    if (hardMode) {
        switchToEasyMode();
        hardMode = false;
        easyButton.style.background = hardButton.style.background;
        easyButton.style.color = hardButton.style.color;
        hardButton.style.color = currentColor;
        hardButton.style.background = "white";
    }
});
//NEW COLORS button
newColorsButton.addEventListener("click", function () {
    //dodati new game logiku
    generateNewSquares();
});

//collect squares effect
var collectBar1 = document.getElementsByClassName("collection-bar")[0];
var collectBar2 = document.getElementsByClassName("collection-bar")[1];
var collectBar3 = document.getElementsByClassName("collection-bar")[2];

function animateCollection(){
    //collectBar1.style.backgroundColor = currentColor;
}

function increaseProgress(){
    incorrectAnswersCounter = 0;
    var progressAmount = parseInt(progressBar.style.width.slice(0,this.length-2),10);
    progressAmount += (noOfSquares - incorrectAnswersCounter)*2;
    progressBar.style.width = progressAmount+"px";

    // dio za animaciju collectanja squareova

}

//score keeping
var currentScore = 0;
var scoreElement = document.querySelectorAll(".score")[0];

function updateScore(){
    currentScore+=(noOfSquares-incorrectAnswersCounter);
    scoreElement.innerHTML = currentScore;
    scoreElement.style.color = correctColor;
}

generateNewSquares();

