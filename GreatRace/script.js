"use strict";

/*
   MidTerm: The Great Race
   Author: Michael Kroth
   Date:   9/25/19
   Filename: script.js
*/
var moveFlash = 0;
var moveSuperman = 0;
var winner = document.getElementById("winner");
var superman = document.getElementById("superman");
var flash = document.getElementById("flash");

document.getElementById('light').addEventListener('click', function() {
    document.getElementById("light").src = "images/greenLight.png";
    startRace();
});

function startRace() {
    var timer = setInterval(moveImages, 2000); // starts a timer for the race
    function moveImages() {
        moveFlash += Math.floor(Math.random() * (10 - 5)) + 5;
        moveSuperman += Math.floor(Math.random() * (10 - 5)) + 5;

        superman.style.paddingLeft = moveSuperman + "%";
        flash.style.paddingLeft = moveFlash + "%";

        if (moveSuperman >= 90 || moveSuperman >= 90) {
            clearInterval(timer);
            stopRace();
        }
    }
}

function stopRace() {
    if (moveSuperman > moveFlash) {
        var img = document.createElement("img");
        img.src = "images/superman.png";
        img.onclick = function() { reset(); };
        img.id = "winnerPic";
        winner.appendChild(img);
        superman.style.display = 'none';
        flash.style.display = 'none';
    } else {
        var img = document.createElement("img");
        img.src = "images/flash.jpg";
        img.onclick = function() { reset(); };
        img.id = "winnerPic";
        winner.appendChild(img);
        flash.style.display = 'none';
        superman.style.display = 'none';
    }
}

function reset() {
    document.getElementById("light").src = "images/redLight.png";
    moveFlash = 0;
    moveSuperman = 0;
    while (superman.firstChild) {
        superman.removeChild(superman.firstChild);
    }
    superman.style.paddingLeft = moveSuperman + "%";
    flash.style.paddingLeft = moveFlash + "%";
    flash.style.display = 'inline';
    superman.style.display = 'inline';
}