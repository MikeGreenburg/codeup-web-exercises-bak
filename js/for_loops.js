// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

//1. create a function named showMultiplicationTable
//2. that accepts a number
//3. console.logs the table for the number used (1 - 10)
function showMultiplicationTable(input) {
    for (var i = 1; i <= input; i*=1){
    console.log(i);
 }
}
console.log(showMultiplicationTable(6));
// For (initialization/; condition/; increment/) {
// }
