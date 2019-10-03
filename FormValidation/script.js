"use strict";

/*
   MidTerm: Form Validation
   Author: Michael Kroth
   Date:   9/29/19
   Filename: script.js
*/

var isValid = true;

function validate(form) {
    var validName = true;
    var validEmail = true;
    var genderSelected = true;
    var validPhone = true;

    validName = checkName(form);
    validEmail = checkEmail(form);
    genderSelected = checkRadio(form);
    validPhone = checkPhone(form);

    if (validName == true && validEmail == true && genderSelected == true && validPhone == true) {
        return isValid;
    }
}

function checkName(form) {

    if (form.name.value == "" || form.name.value.length < 6) {
        isValid = false;
        form.name.focus();
        form.name.style.backgroundColor = "#ffbfbf";
        document.getElementById("warningMessage").style.display = "block";
        document.getElementById("nameError").style.display = "block";
    } else {
        form.name.style.backgroundColor = "white";
        document.getElementById("nameError").style.display = "none";
        isValid = true;
    }

    return isValid
}

function checkEmail(form) {

    if (form.email.value == "") {
        isValid = false;
        form.email.focus();
        form.email.style.backgroundColor = "#ffbfbf";
        document.getElementById("warningMessage").style.display = "block";
        document.getElementById("emailError").style.display = "block";
    } else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
            isValid = true;
            form.email.style.backgroundColor = "white";
            document.getElementById("emailError").style.display = "none";
        } else {
            isValid = false;
            form.email.focus();
            form.email.style.backgroundColor = "#ffbfbf";
            document.getElementById("warningMessage").style.display = "block";
            document.getElementById("emailError").style.display = "block";
        }
    }

    return isValid
}

function checkRadio(form) {

    if (form.gender[0].checked == true || form.gender[1].checked == true) {
        isValid = true;
        document.getElementById("genderSelect").style.backgroundColor = "initial";
    } else {
        isValid = false;
        document.getElementById("genderSelect").style.backgroundColor = "#ffbfbf";
        document.getElementById("warningMessage").style.display = "block";
    }

    return isValid;
}

function checkPhone(form) {
    if (form.phone.value == "") {
        isValid = false;
        form.phone.focus();
        form.phone.style.backgroundColor = "#ffbfbf";
        document.getElementById("warningMessage").style.display = "block";
        document.getElementById("phoneError").style.display = "block";
    } else {
        if (/^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/.test(form.phone.value)) {
            isValid = true;
            form.phone.style.backgroundColor = "white";
            document.getElementById("phoneError").style.display = "none";
        } else {
            isValid = false;
            form.phone.style.backgroundColor = "#ffbfbf";
            document.getElementById("warningMessage").style.display = "block";
            document.getElementById("phoneError").style.display = "block";
        }
    }

    return isValid
}

var frm = window.location.search;
document.getElementById("info").innerHTML = frm;