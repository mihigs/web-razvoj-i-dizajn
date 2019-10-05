var leftArrow = document.getElementsByClassName("leftArrow")[0];
var rightArrow = document.getElementsByClassName("rightArrow")[0];
var landing = document.getElementsByClassName("landing")[0];
var images = ["url(css/images/poster.jpg)","url(css/images/paralax.jpg)","url(css/images/tokyo.jpg)"];
var counter = 0;

function logika(){
    if(counter == 2) counter = 0;
    else counter++;
    landing.style.backgroundImage = images[counter];
}

leftArrow.addEventListener("click",function(){
    if(counter == 0) counter = 3;
     counter--;
    landing.style.backgroundImage = images[counter];
})

rightArrow.addEventListener("click",logika);

