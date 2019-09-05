"use strict";

/*
   Image Swapping 2.0
   Author: Michael Kroth
   Date:   9/4/19
   Filename: scripts.js
*/

// This function will swap one of the thumbnail pictures to the larger container
function swapImage(source) {
    document.getElementById('largePic').src = source;
}

document.getElementById('largePic').addEventListener('dblclick', function() {

    document.getElementById('largePic').src = "two.png"
    document.getElementById('thumbOne').src = "two.png";
    document.getElementById('thumbTwo').src = "three.png";
    document.getElementById('thumbThree').src = "four.png";
    document.getElementById('thumbFour').src = "five.png";

});