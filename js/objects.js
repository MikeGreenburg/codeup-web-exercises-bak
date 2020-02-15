(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    // var person = new Object();// defines a new Object();
    //     person.firstName = "Michael";
    //     person.lastName = "Greenburg";
    //
    // console.log(person.firstName, person.lastName);
    var person = new Object();
        person.firstName = "Michael";
        person.lastName = "Greenburg";

        console.log(person.firstName, person.lastName);

        //creates an Object
    // var person = {
    //     firstName: "Michael",
    //     lastName: "Greenburg"
    //     };
    // console.log(person.firstName, person.lastName); // console logs only the first and last name
    // console.log(person);// console logs the Object and can choose between elements in object


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
   // person.hello = function () {
   //      return "Hello " + person.firstName + " " + person.lastName;
   // };
   //  console.log(person.hello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
/*
write a function that takes in a number and returns the number plus 10
this function can only accept numbers and string numbers

write a function that takes in a number and console logs it as a string

write a function that will take in a number and return true or false if the number is even or odd.
the function only accepts numbers
the function will return false if a string number is input

 */
//1 write a function
//2 takes in a number
    //need to convert and not reject
    // converting will turn any string into a number
//3 returns number + 10
    // return number inside () and + 10 outside ()

// function isNumber(num) {
//     return parseFloat(num) + 10;
// }
// console.log(isNumber("56"));

//1 write function
//2 takes in number
    //do I want to reject (isNaN) or convert (parseFloat)?
    //going to convert because it will turn strings into a number
    // parseFloat(num); >> when I do this it converts the input into a number
//2.5
//  we need to turn num into string
// .toString >> will take my number turn it in to a string
//3 console logs as string
    // console log new string.
// function function1(num){
//         var numbered = parseFloat(num);
//     console.log(numbered);
//     // part2
//         var numberStringed = numbered.toString();
//     //part3
//         console.log(numberStringed);
// }
//
// function1("3");

//1. write a function
//2. take in a number
    //do I want to reject (isNaN) or convert (parse)
//3. return true or false if num is odd or even
//4. only accepts number
//5/ will return false if string
// if (isNaN(num)) {
//     return false;
// } else if(typeof num === "boolean"){
//     return false;
// } else {
//     num 2 % === 0;
// }


function isEven(num) {
    if (isNaN(num)) {
        return false;
    }else if (typeof num === "boolean") {
        return false;
    } else if (typeof num === "string"){
        return false;
    } else {
       return num % 2 === 0;
    }
}
console.log(isEven("2"));

// function isNumber(num) {
//     if (isNaN(num)){
//         return true;
//     } else {
//         return isNumber;
//     }
// }
//
// console.log(isNumber(29));