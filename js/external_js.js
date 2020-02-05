"use strict";

//console.log("hello from external javascript");

//alert("Welcome to my Website!");

//var userPrompt = prompt("What is your favorite color?");
//alert("Great, " + userPrompt + " is my favorite color too!");

// var priceOfRental = prompt("What is the rental price per night?");
// var lMRental = prompt("How many nights do you want to rent The Little Mermaid?");
// var bBRental = prompt("How many nights do you want to rent Brother Bear?");
// var hercRental = prompt("How many nights do you want to rent Hercules?");
// alert("Thank you. Your total charge will be: $" + ((lMRental * priceOfRental) + (bBRental * priceOfRental) + (hercRental * priceOfRental)));

// var amaRate = prompt("How much did you make per hour at Amazon?"); //380//
// var amaHours = prompt("How many hours did you work at Amazon?"); //10//
// var googRate = prompt("How much did you make per hour at Google?"); //400//
// var googHours = prompt("How many hours did you work at Google?"); //6//
// var fbRate = prompt("How much did you make per hour at Facebook?"); //350//
// var fbHours = prompt("How many hours did you work at Facebook?"); //4//
//
// alert ("You made: $" + ((amaRate * amaHours) + (fbRate * fbHours) + (googRate * googHours))); //

// var classSize = confirm("Is there still seating?");
// console.log(classSize);
//
// var classAtEightAM = confirm("Does your schedule conflict with any other classes at this time?");
// console.log(classAtEightAM);
//
// function studentCanSignUpForClass() {
//     if ((classSize === true) && (classAtEightAM === false)) {
//     alert("You have been enrolled in this class");
// } else {
//     alert("Sorry, the selected class is full.");
// }
// }
// studentCanSignUpForClass();

var premiumMember = confirm("Are you a Premium Member?");
        var numberOfItems = confirm("How many Items do you have?");
        var offerValid = true;
// var canHaveDiscount = (numberOfItems > 2 || premiumMember) && offerValid; canHaveDiscount = true

        function canHaveDiscount() {
            if ((premiumMember === true && numberOfItems <= 1) || offerValid === true); {
                alert("Your discount has been applied.");
            } else {
                alert("Sorry your do not qualify for a discount");
    }
}
canHaveDiscount();
