/* Exercise 1
Using the variables below use concatenation to turn them into a complete sentence without changing the variables.*/

// var myNoun = "dog";
// var myAdjective = "big";
// var myVerb = "ran";
// var myAdverb = "quickly";
//
// var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " . "; // Only change this line;
//
// function sentence(input) {
//     return input;
// }
//
// console.log(sentence(wordBlanks));

/* Exercise 2
Nest one Array within Another Array.*/

// 1. write a function that takes in an input and returns the type of the input.
//1. define a function
//2. takes in an input
//3. returns they type of input

// function inputType(input) {
//     return typeof input;
// }
//
// console.log(inputType(12));


// 2. write an if else statement that takes in only a number and returns weather the number is positive or negative.
//1. write an if else statement
//2. takes in only a number
//3. returns whether the number is positive or negative
// function positiveNegative(input) {
//     if (parseFloat(input) > 0) {
//         return true;
//     } else if (parseFloat(input) < 0) {
//         return false;
//     } else if (typeof input === "string") {
//         return alert("that is not a number");
//     } else {
//         return alert("that is not a number");
//     }
// }
//
//
// console.log(positiveNegative("cat"));

// 3. write a switch statement that takes in only a number and returns weather the number is positive or negative.
//1. write a switch statement
//2. takes in only a number
//3. returns whether number is positive or negative

// var pizzaPreference = (prompt("What kind of pizza do you like?")).toLowerCase();
// console.log("User pizza input: " + pizzaPreference);
// if(pizzaPreference === "pineapple and hot sauce") {
//     // alert("What a coincidence, I love that one too");
// } else if(pizzaPreference === "cheese") {
//     // alert("Just plain cheese... okay.");
// } else if(pizzaPreference === "ham") {
//     // alert("Ham is easy to spell and awesome");
// } else {
//     // alert(pizzaPreference + " isn't my favorite, but let's order some.");
// }

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }
//
// var negativePositive = prompt("pick a number");
//
// switch((negativePositive) > 0) {
//     case false:
//         alert("false");
//         break;
//     case true:
//         alert("true");
//         break;
//     default:
//         alert(negativePositive + " is not a number");
//         break;
// }

// 1. Using a while loop console log "using a while loop" 5 times.
//1. write a while loop
//2 console.log
//3 "using a while loop" 5 times
// var i = 0;
// while (i<6){
//     console.log("hello " + i);
//
//     i++;
// }

// console.log(b);
// console.log(c);
// 2. Write a function that creates an array of numbers 1-5.
// function newArray(){
//
//     return array2;
// }
// var array2 = [1,2,3,4];
// console.log(array2[2]);
// console.log(newArray());
// 3. Using a for loop console log every item inside of the array created in problem 2.
//1. write a for loop
//2. console.log every item from array2
// for (var i = 0; i < array2.length; i++) {
//     console.log(array2[i]);
// }
// 4. Using a forEach loop console log every item in the array created in problem 2.
//1. write a forEach loop
//2. console.log every item in the array
// var colors = ["red", "blue", "green", "grey", "orange"];
// colors.forEach(function (color) {
//     console.log("here are the colors in " + color);
// });