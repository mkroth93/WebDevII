"use strict";

/*
   MidTerm: Address Book
   Author: Michael Kroth
   Date:   10/02/19
   Filename: script.js
*/

// Variable declarations
var addressList = document.getElementById("addressList");
var contactPic = document.getElementById("contactPic");
var count = 0; //will keep track of the amount of people in the address book

// Created 5 people to start the address book
var homer = new Person("Homer", "Simpson", "939.555.0111", "homer@gmail.com", "images/homer.png");
var marge = new Person("Marge", "Simpson", "939.555.0112", "marge@gmail.com", "images/marge.png");
var bart = new Person("Bart", "Simpson", "939.555.0113", "bart@gmail.com", "images/bart.png");
var lisa = new Person("Lisa", "Simpson", "939.555.0114", "lisa@gmail.com", "images/lisa.png");
var maggie = new Person("Maggie", "Simpson", "939.555.0115", "maggie@gmail.com", "images/maggie.png");

// this array will hold the objects
var addressBook = [homer, marge, bart, lisa, maggie];

// This loop displays the starting address book
for (var i = 0; i < addressBook.length; i++) {
    displayAddressBook();
}

// will create a person object
function Person(fName, lName, phone, email, pic) {
    this.fName = fName;
    this.lName = lName;
    this.phone = phone;
    this.email = email;
    this.pic = pic;

    this.displayInfo = function() {
        contactPic.src = this.pic;
        document.getElementById("contactName").innerHTML = "Name: " + fName + " " + lName;
        document.getElementById("contactNumber").innerHTML = "Phone: " + phone;
        document.getElementById("contactEmail").innerHTML = "Email: " + email;
    }
}

// This function will display the address book on the page
function displayAddressBook() {
    var item = document.createElement("li");
    var person = addressBook[count];
    var fullName = person.fName + " " + person.lName;
    item.innerHTML = fullName;
    item.id = "person" + count;
    item.value = count;
    item.onmouseover = function() { this.style.color = "blue" };
    item.onmouseout = function() { this.style.color = "initial" };
    addressList.appendChild(item);
    item.addEventListener('click', function() {
        addressBook[this.value].displayInfo();
    });
    count++;
}

// This function will reveal the form when user clicks on the button
function revealForm() {
    document.getElementById("form").style.display = "block"
}

// This function will take the form info and create a new contact in the address book
function addContact(form) {
    var fName = form.fName.value;
    var lName = form.lName.value;
    var number = form.phone.value;
    var email = form.email.value;
    var pic = "images/defualt.png"
    var person = new Person(fName, lName, number, email, pic);

    addressBook.push(person);
    displayAddressBook();
    document.getElementById("form").style.display = "none"
}