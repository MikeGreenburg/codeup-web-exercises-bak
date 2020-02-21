//1. Ex: function should check if nums exist in num?

function doesExist(nums, num){
    for (var i = 0; i < nums.length; i++){
        if(num === nums[i]){//nums[i] is every element in the array!
        console.log(nums[i]);
        }
    }
}
doesExist([1, 3, 5, 7], 2);// should be false because 2 is not in the array
doesExist([1, 3, 5, 7], 1);// should return true because 1 does exist inside the array!

//2. Array manipulation

var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

dogs.forEach(function(dog) {
    console.log(dog.breed + " " + dog.age)
    // dogs.forEach(function (dog) {
    // console.log(dog.age + 1);
});

//3 Conditionals
//JOB AT City of San Antonio
//Job requirements : over 18 or high school degree

var newGuy = "john";
var age1 = 28;
var highSchool = false;

if(age >= 18 || highSchool === true){
    alert("You can apply!")
} else {
    alert("You are not eligible!")
}

//4 Conditionals
//JOB AT Codeup
//Job requirements : over 18 and high school degree

var girl = "Betty";
var age = 17;
var highSchools = true;

if (age >= 18 && highSchools === true) {
    alert("You may apply for this job.");
}else{
    alert("You may not apply!");
}