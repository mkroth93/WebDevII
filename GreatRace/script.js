"use strict";

/*
   MidTerm: The Great Race
   Author: Michael Kroth
   Date:   9/25/19
   Filename: script.js
*/

//Variable Declarations
var moveFlash = 0;
var moveSuperman = 0;
var winner = document.getElementById("winner");
var superman = document.getElementById("superman");
var flash = document.getElementById("flash");

//Event listener will start the race when the image is clicked on
document.getElementById('light').addEventListener('click', function() {
    document.getElementById("light").src = "images/greenLight.png";
    startRace();
});

function startRace() {
    var timer = setInterval(moveImages, 800); // starts a timer for the race
    function moveImages() {

        superman.style.paddingLeft = moveSuperman + "%";
        flash.style.paddingLeft = moveFlash + "%";

        moveFlash += Math.floor(Math.random() * (10 - 5)) + 5;
        moveSuperman += Math.floor(Math.random() * (10 - 5)) + 5;


        if (moveSuperman >= 90 || moveSuperman >= 90) {
            clearInterval(timer);
            stopRace();
        }
    }
}

//This function will display a larger image of the winner
function stopRace() {
    if (moveSuperman > moveFlash) {
        var img = document.createElement("img");
        img.src = "images/superman.png";
        img.onclick = function() { reset(); };
        img.id = "winnerPic";
        document.getElementById("winnerHeader").innerHTML = "WINNER!"
        winner.appendChild(img);
        superman.style.display = 'none';
        flash.style.display = 'none';
    } else {
        var img = document.createElement("img");
        img.src = "images/flash.jpg";
        img.onclick = function() { reset(); };
        img.id = "winnerPic";
        document.getElementById("winnerHeader").innerHTML = "WINNER!"
        winner.appendChild(img);
        flash.style.display = 'none';
        superman.style.display = 'none';
    }
}

//This function will reset the page so you can race the images again
function reset() {
    document.getElementById("light").src = "images/redLight.png";
    moveFlash = 0;
    moveSuperman = 0;
    document.getElementById("winnerHeader").innerHTML = ""
    var winnerPic = document.getElementById("winnerPic");
    winnerPic.parentNode.removeChild(winnerPic);
    superman.style.paddingLeft = moveSuperman + "%";
    flash.style.paddingLeft = moveFlash + "%";
    flash.style.display = 'inline';
    superman.style.display = 'inline';
}