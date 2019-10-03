"use strict";

/*
   MidTerm: Address Book
   Author: Michael Kroth
   Date:   10/02/19
   Filename: script.js
*/

var addressList = document.getElementById("addressList");

function Person(fName, lName, phone, email, pic){
    this.fName = fName;
    this.lName = lName;
    this.phone = phone;
    this.email = email;
    this.pic = pic;

    this.displayInfo = function(){
        document.getElementById("contactPic").src = this.pic;
    }
}

var homer = new Person("Homer", "Simpson", 9395550111, "homer@gmail.com", "/images/homer.jpg");
var marge = new Person("Marge", "Simpson", 9395550112, "marge@gmail.com", "/images/marge.png");
var bart = new Person("Bart", "Simpson", 9395550113, "bart@gmail.com", "/images/bart.png");
var lisa = new Person("Lisa", "Simpson", 9395550114, "lisa@gmail.com", "/images/lisa.png");
var maggie = new Person("Maggie", "Simpson", 9395550115, "maggie@gmail.com", "/images/maggie.jpg");

var addressBook = [homer,marge,bart,lisa,maggie];

displayAddressBook(addressBook);

function displayAddressBook(addressBook){
    for(var i=0; i<addressBook.length; i++){
        var item = document.createElement("li");
        var person = addressBook[i];
        var fullName = person.fName + " " + person.lName;  
        item.innerHTML = fullName;
        item.id = "person" + i;
        addressList.appendChild(item);
        item.addEventListener('click', function () {
            this.displayInfo();
          });
        
    }
}

    

