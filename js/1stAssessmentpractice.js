// 1. Define a function named `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.
//
//1. define a function
//2. name it isBoolean
//3. takes in a value and returns boolean (typeof returns - object, boolean, number)
    // do I want to convert (parseFloat) or reject (isNaN) it?
//4. if argument is boolean value or not (for boolean ( isNan = true/false)

// isBoolean(true)             // true
// isBoolean(false)            // true
// isBoolean(0)                // false
// isBoolean(null)             // false
// isBoolean("")               // false
// isBoolean("kwiw")           // false
// isBoolean([1, 2])           // false
//
// function isBoolean(input) {
//     return typeof input === "boolean";
// }
// console.log(isBoolean(0));
//
// function isBoolean(input) {
//     return typeof input === "number";
// }
// console.log(isBoolean());
// 2. Define a function named `isString` that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.
//
// function isString(input) {
//     return typeof input === "string";
// }
// console.log(isString());

// isString("Hello")           // true
// isString("Codeup")          // true
// isString("123")             // true
// isString(4)                 // false
// isString(true)              // false
// isString([1, 2, 3])         // false
// isString()                  // false
// isString(null)              // false
//
// 3. Define a function named `isNotString` that accepts an input and returns `true` or `false` based on whether an input is not a string. Numeric strings will count as strings and should return `false`.
//
// function isNotString(input) {
//     return typeof input !== "string";
// }
//
// console.log(isNotString("123"));

// isNotString(4)                 // true
// isNotString(true)              // true
// isNotString([1, 2, 3])         // true
// isNotString()                  // true
// isNotString(null)              // true
// isNotString("Hello")           // false
// isNotString("Codeup")          // false
// isNotString("123")             // false
//
// 4. Define a function named `isEmptyString` that will return `true` when passed an argument with the value of "", i.e. an empty string. All other arguments should return false.
//
// function isEmptyString(input) {
//     return input === "";
// }
//
// console.log(isEmptyString());

// isEmptyString("")                // true
// isEmptyString(" ")               // false
// isEmptyString("Hello")           // false
// isEmptyString("Codeup")          // false
// isEmptyString("123")             // false
// isEmptyString(true)              // false
// isEmptyString([1, 2, 3])         // false
// isEmptyString(null)              // false
// isEmptyString()                  // false
//
// 5. Define a function named `isNotNumeric` that accepts an input and returns `true` or `false` based on whether an input is a non-numeric value or not. Numeric strings are numeric and should return false.
//
//1 define a function
//2. named isNonNumeric
//3. accepts an input
//4. returns 'true' or 'false'
//5. based on whether input is non-numeric value or not
//6. numeric strings are numeric and should return false
//*****************************************
// function isNonNumeric(input) {
//     return isNaN(parseFloat(input));
// }
//
//
// console.log(isNonNumeric(3.141));
//*****************************************
// isNotNumeric("")               // true
// isNotNumeric(true)             // true
// isNotNumeric("Bob")            // true
// isNotNumeric([1,2,3])          // true
// isNotNumeric(23)               // false
// isNotNumeric("42")             // false
// isNotNumeric(3.141)            // false
//
//
// 6. Define a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is less than zero.
//
//1. define a function named isNegative
//2. accepts a number
//3. returns true or false (convert or reject)
//4. depending on if the input is less than 0

// function isNegative(num) {
//     return num < 0;
// }
//
// console.log(isNegative(6));

// isNegative(-1)              // true
// isNegative(-5)              // true
// isNegative("-3")            // true
// isNegative(0)               // false
// isNegative(6)               // false
// isNegative("10")            // false
// isNegative(true)            // false
// isNegative(false)           // false
// isNegative("Bob")           // false
// isNegative([-1, 2, 3])      // false
// isNegative(null)            // false
//
// 7. Define a function named `isPositive` that accepts an input and returns `true` or `false` based on whether the input is above zero. Any non-numeric input should return false.
//
//1. define a function named isPositive
//2. accepts an input
//3. returns true or false
//4. based on if input is above 0
//5. any non-numeric input should be false
//
// function isPositive(input) {
//     return parseFloat(input) > 0;
// }
//
//
// console.log(isPositive(true));

// isPositive(1)               // true
// isPositive("6")             // true
// isPositive(3.141)           // true
// isPositive(-1)              // false
// isPositive(-5)              // false
// isPositive("-4")            // false
// isPositive(0)               // false
// isPositive("Bob")           // false
// isPositive(true)            // false
//
// 8. Define a function named `isZero` that will return `true` when passed an argument of the numeric value `0`, and return `false` for all other arguments.
//
//1. define a function
//2. named isZero
//3. will return true
//4. when passed an argument of the numeric value '0'
//5. return false for all other arguments

//  function isZero(input) {
//     return parseFloat(input) === 0;
//  }
//
// console.log(isZero("123"));

// isZero(0)                 // true
// isZero("0")               // true
// isZero("Hello")           // false
// isZero("Codeup")          // false
// isZero("123")             // false
// isZero(true)              // false
// isZero([1, 2, 3])         // false
// isZero(null)              // false
// isZero()                  // false
//
// 9. Define a function named `isArray` that takes in an input and returns a boolean whether or not that input is an array or not.
//
//1. define a function
//2. named isArray
//3. takes in input
//4. returns boolean whether or not input is array or not

// function isArray(input) {
//     return input === "boolean"
// }
// console.log(isArray([]));
// isArray([])                 // true
// isArray([1, 2, 3])          // true
// isArray(['a', 'b'])         // true
// isArray(false)              // false
// isArray(12)                 // false
// isArray("Bob")              // false
// isArray({'some': 'object'}) // false
// isArray(true)               // false
// isArray()                   // false
//
// 10. Define a function named `upperCase` that takes in a single input. If the input is not a string, return `false`. If the input is a non-numeric string, then return it with all the letters capitalized.
//
//1. define a function
//2. named upperCase
//3. takes in a single input
//4. if input is not a string return false
//5. if the input is non-numeric string return it all caps
//
// function upperCase(input) {
//     return input.toUpperCase();
//
// }
// console.log(upperCase("javascript"));

// upperCase("Codeup")         // "CODEUP"
// upperCase("javascript")     // "JAVASCRIPT"
// uppercase("45")             // false
// upperCase(23)               // false
// upperCase(null)             // false
// upperCase([1, 2, 3])        // false
// upperCase(true)             // false
// upperCase()                 // false