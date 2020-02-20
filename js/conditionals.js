// "use strict";
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  */
// Not using a function

var willContinue = confirm("What number would you like to enter?");

if(willContinue) {
    //prompt for number
    var userInput = prompt("What number would you like to enter?");
    var isNum = !isNaN(userInput);           // **** function isNum **** //

    if (isNum) { // isNum is true
        // we know that we have a real number
        // run all of our calculations in this if statement

        //even or odd                        // **** function even() **** //
        if (userInput % 2 === 0) { // true -> even
            alert("number is even");
        } else { // false -> odd
            alert("Number is odd");
        }

        // num + 100                         // **** function plus100() **** //
        var userNum = parseFloat(userInput);
        alert("Your number plus 100 = " + (userNum + 100));

        // negative or positive              // **** function negative() **** //
        if (userInput < 0) { // their number is negative
            alert("Your number is negative");
        } else if(userInput > 0) { // their number is positive
           alert("Your number is positive");
        } else { // Number is Zero
            alert("Your number is 0")
        }
    } else { // isNum is false
      alert("That is not a number")
    }
}
// // ----- End of not using a function ----- //
//
// // var confirmQuestion = confirm("Would you like to pick a number?");
// // var numberPrompt = Number(prompt("Choose your number!"));
// // if (confirmQuestion === true) {
// //     numberQuestion(numberPrompt);
// // }
// //
// // function numberQuestion(number) {
// //     var evenOdd;
// //     var plusOneHundred;
// //     var negPos;
// //     if (isNaN(number)){
// //         alert("NaN");
// //     }
// //     else if(number % 2 === 0) { //0 is even
// //         alert("Your number is even");
// //     }
// //     else if(number % 2 === 1) { //1 odd is
// //         alert("Your number is odd");
// //     }
// //     //end of even odd check
// //     alert("Your number plus 100 is: " + (number + 100));
// //         //end of plus 100 check
// //
// //     if (number >= 0) {
// //         alert(number + " is positive");
// //     } else {
// //         alert(number + " is negative");
// //     }
// // }
// //
// // console.log(numberQuestion(number));
//
// function isNumFunc(input) { // taking user number input
//     return !isNaN(userInput); // true -> number, false -> NaN
// }
//
// function isEven(num) {
//     return num % 2 === 0; // if true -> even, if false -> odd
// }
//
// function plus100(num) {
//     var userNum = parseFloat(num);
//     var returnString = "Your number plus 100 = " + (userNum + 100);
//     // return ("Your number plus 100 = " + (userNum + 100)); // return userNum + 100 is cleaner code  // our return value will be userInput + 100
//     return returnString;
// }
//
// function isNegative(num) {
//     return num < 0; // true -> number is less than zero (negative)
//                     // false -> number is > 0 (positive)
// }
//
// function mainFunction(willContinue) {
//     // call all functions
//     if(willContinue) { // user clicked Okay
//         var userInput = prompt("What number would you like to enter?");
//         if(isNumFunc(userInput)) {
//             // get number details
//             var isEvenMessage = (isEven(userInput) ? "Your number is even" : "Your number is odd");
//             alert(isEvenMessage);
//             // plus 100
//             alert(plus100(userInput)); // alert the plus 100 string from above function
//             //negative or positive
//             var isNegativeMessage = (isNegative(userInput) ? "Number is negative" : "Number is positive");
//             alert(isNegativeMessage);
//         } else {
//
//         }
//     } // outside of this statement -> they clicked CANCEL
// }
//
// var willContinueFunc = confirm("Would you like to enter a number?");
// mainFunction(willContinueFunc);
//     /* ########################################################################## */
//
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined below, if the color passed is not
//  * one of the ones defined below, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
// //1. create a function called analyzeColor
//     //2. that accepts a string that is a color name input
//     //3. return a message that says so
// // var red = "Apples are red";
// // var blue = "Water is blue";
// // var cyan = "Is a mix between Green and Blue";
// // // var colorInput = ['red', 'blue', 'cyan'];
//
// function analyzeColor(color) {
//     var colorMessage = "";
//     if (color === "blue") {
//         colorMessage = "blue is the color of the sky";
//     } else if(color === "red") {
//         colorMessage = "Strawberries are red";
//     } else if(color === "cyan") {
//         colorMessage = " cyan is a mix between green and blue";
//     } else {
//         colorMessage = "I don't know about that color";
//     return colorMessage;
// }
//
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
// function analyzeColor(color) {
//     var colorMessage = "";
//     switch (color) {
//         case "blue":
//         colorMessage = "blue is the color of the sky";
//         case "red":
//         colorMessage = "Strawberries are red";
//         case "cyan":
//         colorMessage = " cyan is a mix between green and blue";
//         default:
//         colorMessage = "I don't know about that color";
//
//
// console.log(analyzeColorSwitch(randomColor));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("cyan"));
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
// var userColor = prompt("Please enter a color");
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
// function calculateTotal(luckyNumber, totalAmount) {
//     var discountRate = 0;
//     switch (luckyNumber) {
//         case 0:
//             discountRate = 0;
//             break;
//         case 1:
//             discountRate = 0.10;
//             break;
//         case 2:
//             discountRate = 0.25;
//             break;
//         case 3:
//             discountRate = 0.35;
//             break;
//         case 4:
//             discountRate = 0.50;
//             break;
//         case 5:
//             discountRate = 1;
//             break;
//     }
//     // total - (discountRate * total)
//     // 50 - (50*.10) = 50 - 5 = 45
//     return totalAmount - (discountRate * totalAmount);
// }

