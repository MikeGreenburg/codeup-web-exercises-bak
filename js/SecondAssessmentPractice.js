"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// 1. Define a function named isNumeric that takes in a value and returns true if the input is numeric or not. Numeric strings are numeric and should return true.
//
//1. write a function named isNumeric
//2. takes in a value and returns true
//3. if the input is numeric or not
//4. numeric strings are numeric and should return true.

// function isNumeric(input) {
//     if (input === "") {
//         return false;
//     } else {
//         return !isNaN(parseFloat(input));
//     }
// }
// console.log(isNumeric(true));


// isNumeric(23)               // true
// isNumeric("42")             // true
// isNumeric(3.141)            // true
// isNumeric("")               // false
// isNumeric(true)             // false
// isNumeric("Bob")            // false
// isNumeric([1,2,3])          // false

// 2. Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.

function increment(input) {
    return
}

// increment(0)                // 1
// increment("10")             // 11
// increment(-5)               // -4
// increment("Bob")            // false
// increment([1, 2, 3])        // false
// increment(true)             // false
// increment(null)             // false

// 3. Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, decrement should return false.



// decrement(19)               // 18
// decrement(0)                // -1
// decrement("4")              // 3
// decrement("Bob")            // false
// decrement([1, 2, 3])        // false
// decrement(false)            // false
// decrement(null)             // false

// 4. Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.
//




// getHighestNumber(1, 3, 2)           // 3
// getHighestNumber(0, 1, "2")         // 2
// getHighestNumber(9, 3, -20)         // 9
// getHighestNumber(2, 2, 2)           // 2
// getHighestNumber(2, 5, 5)           // 5
// getHighestNumber(1, 2, 'x')         // false
// getHighestNumber("a", "b")          // false
// getHighestNumber()                  // false

// 5. Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs. If one or both inputs is not numeric, add should return false.


// add(1, 2)                   // 3
// add(0, 0)                   // 0
// add(-5, 10)                 // 5
// add("2", 4)                 // 6
// add(5, true)                // false
// add(true, false)            // false
// add("Monday", "Tuesday")    // false
// add(null)                   // false

// 6.Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second. If either or both inputs are not numeric, multiply should return false.
//

// multiply(4, 2)              // 8
// multiply(0, 44)             // 0
// multiply(-5, 10)            // -50
// multiply(5, true)           // false
// multiply(true, false)       // false
// multiply("Monday")          // false
// 7.Define a function named square. If the provided input is numeric, square should return the number multiplied by itself. If the input is not numeric, square, should return false.


// square(2)                   // 4
// square(3)                   // 9
// square(-4)                  // 16
// square("5")                 // 25
// square(0.5)                 // .25
// square("Bob")               // false
// square(true)                // false
// square(false)               // false
// square(null)                // false
// square([1, 2, 3])           // false
// square()                    // false

// 8.Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.
// function sumOfSquare(a, b) {

// sumOfSquares(2, 3)          // 13
// sumOfSquares(1, 0)          // 1
// sumOfSquares("4", 5)        // 41
// sumOfSquares(2, false)      // false
// sumOfSquares(null)          // false
// sumOfSquares()              // false

// 9.Write a function named containsVowel that takes in a single input as its argument. If the argument is not a string, then return false. If the argument is a string, then return true if the string contains any of the vowels 'a', 'e', 'i', 'o', or 'u' either uppercased or lowercased. Ignore 'y'. If the string does not contain any of these vowels, then return false.
//


// containsVowel("Index")      // true
// containsVowel("Codeup")     // true
// containsVowel("Jane")       // true
// containsVowel("bb8")        // false
// containsVowel("")           // false
// containsVowel(34)           // false
// containsVowel([1, 2, 3])    // false

// 10.Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.


// isPalindrome("Bob")         // true
// isPalindrome("radar")       // true
// isPalindrome("ufotofu")     // true
// isPalindrome("Monday")      // false
// isPalindrome(232)           // false
// isPalindrome(null)          // false

