"use strict";

// console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
var isAdmin = true;
if(isAdmin) {
    // Display a specific navbar
    console.log("Displaying Admin Navbar");

}
//TODO Together: Send a 20% off coupon if its users birthday
var isBirthday = true;
if(isBirthday) {
    // send 20% coupon
    console.log("Sending Coupon");
}
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
var isRainy = true;

if(isRainy) {
    // alert("It's raining!");
}
//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
var currentBalance = 100000;
var itemCost = 50000;

if(currentBalance > itemCost) {
    // alert("You can buy it!");
}



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
var numberOfLives = 4;
if( numberOfLives === 0) {
    // alert("Sorry, game over!")
}

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
var weather = "snowing";
if(weather === "snowing") {
    // alert("It's Snowing!");
}
//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
var number = 11;
if(number > 10) {
    // alert("number is greater than 10");
}



//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
function greaterThan10(numberInput) {
    if(numberInput > 10) {
        // alert("number is greater than 10");
    }
}

console.log(greaterThan10(number));




// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
var isAdmin = true;
if(isAdmin) {
    // Display a specific navbar
    console.log("Displaying Admin Navbar");

} else {
    // display non-admin navbar
    console.log("Displaying regular navbar");
}
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
var isRaining = false;
if(isRaining) {
    // alert("It's raining!");
} else {
    // alert("Have a nice Day!");
}



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
var numberOfLives = 0;
if(numberOfLives===0) {
    // alert("Game Over!");
} else {
    // alert("Next Level!");
}
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
var weather = "windy";
if(weather === "snowing") {
    // alert("It's snowing!");
} else {
    // alert("Check back later for more details.");
}
//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
var numberInput = 11;
if(numberInput > 10) {
    // alert(true);
} else {
    // alert("the number is less than 10");
}
//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
function checkIfGameIsOver(numberOfLives) {
    if(numberOfLives === 0) {
        return "Sorry, game over";
    } else {
        return "Next Level!";
    }
}

// alert(checkIfGameIsOver(0));



//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.



// SHOULD WE DELETE STUFF EXAMPLE




//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// var weather = "raining";
// if(weather === "snowing") {
//     alert("It's snowing!");
// } else if(weather === "raining") {
//     alert("It's raining!");
// } else {
//     alert("Have a nice day!");
// }

//TODO Together: refactor the above statement as a function
function checkWeather(weather) {
    if(weather === "snowing") {
        return "It's snowing!";
    } else if(weather === "raining") {
        return "It's raining!";
    } else {
        return "Have a nice day!";
    }
}

// console.log(checkWeather("cloudy"));
// alert(checkWeather("meatballs"));

// Together: PIZZA PREFERENCE EXAMPLE
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


//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.
// function checkTrafficLight(lightColor) {
//     if(lightColor === "red") {
//         return "stop";
//     } else if(lightColor === "yellow") {
//         return "slow";
//     } else if(lightColor === "green") {
//         return "Go";
//     } else {
//         return "Proceed with caution";
//     }
// }
//
// console.log(checkTrafficLight("blinking"));
// console.log(checkWeather("raining"));


// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

var userAge = 17;
var hasPermit = true;

if (userAge < 15) {
    alert("You are not eligible for a Learner's Permit");
} else {
    // all the other possibilities
    // check for user age
    if (userAge === 15) {
        alert("You are eligible for a Learner's Permit!");
    } else if ((userAge >= 16) && hasPermit) {
        // older than or equal to 16, and they have a permit
        alert("You can get a Drivers's License!")
    } else if ((userAge >= 16) && !hasPermit) {
        // 16 and older, but has no permit
        alert("You are not eligible for a Driver's License");
    } else {
        alert("We don't have enough information to determine your eligibility");
    }
}




// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!



// =============== SWITCH STATEMENT ================
//TODO Together:

var pizzaChoice = (prompt("What kind of pizza do you like?")).toLowerCase();
console.log("User pizza input: " + pizzaChoice);

function pizzaMessage(pizzaPreference) {
    var pizzaConfirmation; // string with confirmation message

    switch(pizzaPreference) {
        case "pineapple and hot sauce":
            pizzaConfirmation = "What a coincidence, I love that one too";
            break;
        case "cheese":
            pizzaConfirmation = "Just plain cheese... okay.";
            break;
        case "ham":
            pizzaConfirmation = "Ham is easy to spell and awesome";
            break;
        default:
            pizzaConfirmation = pizzaPreference + " isn't my favorite, but let's order some.";
            break;
    } // end of switch

    return pizzaConfirmation;
}

// console.log(pizzaMessage(pizzaChoice));











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


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.


//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
