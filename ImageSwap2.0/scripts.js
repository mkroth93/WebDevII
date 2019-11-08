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

var card1 = new picture("images/jack.jpg", "jack");
var card2 = new picture("images/queen.png", "queen");
var card3 = new picture("images/king.png", "king");
var card4 = new picture("images/ace.jpg", "ace");
var card5 = new picture("images/two.png", "two");
var card6 = new picture("images/three.png", "three");
var card7 = new picture("images/four.png", "four");
var card8 = new picture("images/five.png", "five");

highCards = [card1, card2, card3, card4];
lowCards = [card5, card6, card7, card8];

function picture(source, alt) {
    this.source = source;
    this.alt = alt;

    this.enlargePic = function() {
        document.getElementById('largePic').src = this.source;
    }
}

var timer = setInterval(swapPhoto, 3000); // starts a timer to cycle through the thumbnail

displayThumbnail(highCards); // starting images 

// This function will loop through the array of images and display it in the thumbnail
function displayThumbnail(cards) {
    count = 0;
    document.getElementById('thumbnail').innerHTML = ""; // clears div
    for (card of cards) {
        var img = document.createElement("img");
        img.src = card.source;
        img.value = count;
        img.addEventListener('click', function() {
            cards[this.value].enlargePic();
        });
        img.id = "thumb" + count;
        img.alt = card.alt
        document.getElementById('thumbnail').appendChild(img);
        count += 1;
    }
}

// This function is called by the timer and cycles through the arry of photos 
function swapPhoto() {
    if (setOne) {
        if (i < highCards.length) {
            document.getElementById('largePic').src = highCards[i].source;
            i++;
        } else {
            i = 0;
            document.getElementById('largePic').src = highCards[i].source;
            i++;
        }
    } else {
        if (i < lowCards.length) {
            document.getElementById('largePic').src = lowCards[i].source;
            i++;
        } else {
            i = 0;
            document.getElementById('largePic').src = lowCards[i].source;
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