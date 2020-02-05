"use strict"

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// function sayHello(name) {
//     return "Hello, " + name + "!";
// }
// console.log(sayHello("John"));
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
// var helloMessage = sayHello("Mike");
// // console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
// var myName = "Mike G";
// sayHello(myName);
// console.log(sayHello(myName));
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
//1. create a function called isTwo
//2. take in a number as a parameter
//3. the function should return true/false value if number is 2
//function should check if argument ='s 2

// How to write a function
// function "function name" (parameter) {
//     return "expression";
// }
// "fucntion name"(argument); "calls function"
// console.log(displaying the info in the console)

// function isTwo(number) {
//     return number === 2;
// }
// console.log(isTwo(5));
//
// isTwo(random);
// console.log(isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(num, per) {
    return (num/100)*per;
}
// console.log(calculateTip());

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// 1. Prompt user to input bill total
//2. Prompt user to input tip percentage
//3. alert user to proper tip amount in money
var num = parseFloat(prompt( "What is the total bill"));
var per = parseFloat(prompt("What tip percent do you want to leave?"));
var alertMessage = "Your tip amount is: $" + calculateTip(num, per).toFixed(2);

alert(alertMessage);

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
//1. create function named applyDiscount
//2. function should accept a price 1st then a discount percentage
//3. function should return the result of applying discount to original price.
// var originalPrice = prompt("What is the full price of the item?");
// var discountedPercent = prompt("What is the discount percent?");
// var alertMessage = applyDiscount(originalPrice, discountedPercent).toFixed(2);
// function applyDiscount(originalPrice, discountPercent) {
//     return originalPrice - (originalPrice * discountPercent);
// }
//
// alert(alertMessage);
// // console.log(applyDiscount(originalPrice, discountedPercent));
