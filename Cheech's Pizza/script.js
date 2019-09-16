"use strict";

/*
   Exam 1: Cheech's Pizza
   Author: Michael Kroth
   Date:   9/16/19
   Filename: script.js
*/

// An array of different pizza types
var pizzas = ["Cheese", "Pepperoni", "Sausage", "Supreme", "Breakfast"];

// loops to create selection box to order 1-10 pizzas
for (var i = 0; i < 10; i++) {
    var choice = document.createElement("option");
    choice.text = i + 1;
    document.getElementById('numPizzas').appendChild(choice);
}

// loops to create selection box of types of pizzas
for (var type of pizzas) {
    var choice = document.createElement("option");
    choice.text = type;
    document.getElementById('types').appendChild(choice);
}

document.getElementById('order').addEventListener('click', function() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("phone").value;
    var numPizzas = document.getElementById("numPizzas").value;
    var type = document.getElementById("types").value;

});