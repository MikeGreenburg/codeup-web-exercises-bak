//1.
// Create a function that takes two numbers as arguments and return their sum.
//
// addition(3, 2) ➞ 5
//
// addition(-3, -6) ➞ -9
//
// addition(7, 3) ➞ 10

//1. create a function
//2. that takes in two numbers as arguments
//3. return their sum

// function numberSum(a, b) {
// //     return a + b;
// // }
// // console.log(numberSum(3, 2));

//2.
//Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
//
// Examples
// addition(0) ➞ 1
//
// addition(9) ➞ 10
//
// addition(-3) ➞ -2

//1. create a function named nextNumber
//2. takes in a number as an argument and increases it by +1
//3. returns the result

// function notNumber(a) {
//     return a + 1;
// }
// console.log(notNumber(2));

//3.
//Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
//
// Examples
// lessThanOrEqualToZero(5) ➞ false
//
// lessThanOrEqualToZero(0) ➞ true
//
// lessThanOrEqualToZero(-2) ➞ true

//1. create a function named trueFalse
//2. takes a number as its only argument
//3. returns true if it is less than or equal to zero
//4. otherwise return false.

// function lessThanOrEqualToZero(num) {
//     if(num <= 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(lessThanOrEqualToZero(-8));

//4.
//Convert Hours and Minutes into Seconds
// Write a function that takes two integers (hours, minutes) and converts them into seconds.
//
// Examples
// convert(1, 3) ➞ 3780
//
// convert(2, 0) ➞ 7200
//
// convert(0, 0) ➞ 0

//1. Create a function called convert
//2. that takes two integers (hours, minutes) in
//3. converts them into seconds

function convert(a,b) {
    return (3600 * a) / ();
}
console.log(convert(3, 8));

// function time_convert(num)
// {
//     var hours = Math.floor(num / 60);
//     var minutes = num % 60;
//     return hours + ":" + minutes;
// }
//
// console.log(time_convert(71));
// console.log(time_convert(450));
// console.log(time_convert(1441));