"use strict";

/*
   Image Swapping with Arrays (added timer)
   Author: Michael Kroth
   Date:   9/16/19
   Filename: scripts.js
*/
var highCards, lowCards, count, card, i;
i = 0;
var setOne = true;
highCards = ["images/jack.jpg", "images/queen.png", "images/king.png", "images/ace.jpg"];
lowCards = ["images/two.png", "images/three.png", "images/four.png", "images/five.png"];

var timer = setInterval(swapPhoto, 3000); // starts a timer to cycle through the thumbnail

displayThumbnail(highCards); // starting images 

// This function will loop through the array of images and display it in the thumbnail
function displayThumbnail(cards) {
    count = 0;
    document.getElementById('thumbnail').innerHTML = ""; // clears div
    for (card of cards) {
        var img = document.createElement("img");
        img.src = card;
        img.onclick = function() { document.getElementById('largePic').src = this.src; };
        img.id = "thumb" + count;
        document.getElementById('thumbnail').appendChild(img);
        count += 1;
    }
}

// This function is called by the timer and cycles through the arry of photos 
function swapPhoto() {
    if (setOne) {
        if (i < highCards.length) {
            document.getElementById('largePic').src = highCards[i];
            i++;
        } else {
            i = 0;
            document.getElementById('largePic').src = highCards[i];
            i++;
        }
    } else {
        if (i < lowCards.length) {
            document.getElementById('largePic').src = lowCards[i];
            i++;
        } else {
            i = 0;
            document.getElementById('largePic').src = lowCards[i];
            i++;
        }
    }
}

// This function will swap the images with four new images when the larger image is double clicked
document.getElementById('largePic').addEventListener('dblclick', function() {
    if (setOne) {
        document.getElementById('largePic').src = "images/two.png"
        displayThumbnail(lowCards);
        setOne = false;
        i = 0;
    } else {
        document.getElementById('largePic').src = "images/jack.jpg"
        displayThumbnail(highCards);
        setOne = true;
        i = 0;
    }

});