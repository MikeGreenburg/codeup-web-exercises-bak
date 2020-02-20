// Get Students with Names and Top Notes
// Create a function that takes an array of objects like { name: 'John', notes: [3, 5, 4]} and returns an array of objects like { name: "John", topNote: 5 }.
//
// If student has no notes (an empty array) then let's assume topNote: 0.
//
// Examples
//     [
//     { name: "John", notes: [3, 5, 4]}
//     ] ➞ [
//     { name: "John", topNote: 5}
// ]
// Notes
// Try doing it with an arrow function.

//1. create a function
//2. takes an array of objects
//3. returns an array of objects

function getStudentsWithNamesAndTopNotes(students) {

}

books.forEach(function(book, index){
    console.log("Book #" + (index + 1) + "\nTitle:" + book.title + "\nAuthor:" + book.author.firstname + " " + book.author.lastname);
};
/////////*****This is the testing code*****///////////////////////////////
// const objectsAreEqual = (actual, expected) => Object.keys(expected).every(
//     key => actual[key] === expected[key]
// )
// const areEqual = (actual, expected, compare) => expected.every(
//     (item, index) => compare(actual[index], item)
// )
// const sets = [
//         [['Jacek', [5, 4, 3]], ['Ewa', [3, 3, 3]], ['Zygmunt', [1, 2, 3]]],
//         [['Jacek', []], ['Ewa', []], ['Zygmunt', [1, 2, 3]]],
//         []
//     ].map(
//     set => ({
//             actual: getStudentsWithNamesAndTopNotes(
//                 set.map(([name, notes]) => ({ name, notes }))
//     ),
//     expected: set.map(([name, notes]) => ({ name, topNote: Math.max(...notes, 0) }))
// })
// ).forEach(
//     ({ actual, expected }) => {
//     Test.expectNoError('Result should be an array', () => {
//         Test.assertEquals(areEqual(actual, expected, objectsAreEqual), true, JSON.stringify(actual))
//     },
// };


//A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).
//
// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:
//
// If win equals true, end the list with Pong!.
// If win equals false, end with Ping! instead.
// Examples
// pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]
//
// pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]
//
// pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
// Notes
// You will always return the ball (i.e. the Pongs are yours).
// Player 1 serves the ball and makes Ping!.
// Return an array of strings.

//1. create a function
//2. that inserts Pong! in between each elements
//3. if win ==='s true end with Pong!
//4. if win ==='s false end with Ping!
//5. you will always return the ball Pongs are yours
//6. player 1 serves
//7. Return an array of strings

function pingPong(arr, win) {
    if (win === true){
        return "Pong!";
    }
}
// Test.assertSimilar(pingPong(["Ping!", "Ping!", "Ping!"], true), ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"])
// Test.assertSimilar(pingPong(["Ping!", "Ping!"], false), ["Ping!", "Pong!", "Ping!"])
// Test.assertSimilar(pingPong(["Ping!"], true) , ["Ping!", "Pong!"])