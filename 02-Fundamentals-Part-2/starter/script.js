/*
 'use strict';

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I can drive');


function logger () {
    console.log('My name is Taufiq');
}

// calling / running / invoking a function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = (`Juice with ${apples} apples and ${oranges} oranges.`);
    return juice;
}

console.log(fruitProcessor(3,1));

const appleJuice = fruitProcessor(4, 5);
console.log(appleJuice);


// function declaration
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

const age1 = calcAge1(1997);

// function expression
const calcAge2 = function (birthYear){
    return 2024 - birthYear;
}

const age2 = calcAge2 (1997);

console.log(age1, age2);

// arrow function
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const retirementYear = (year, birthYear, firstName)=> {
    const age = year - birthYear;
    const retirement = 65 - age;
    const yearRetire = year + retirement; 
    return `${firstName} retire in ${yearRetire} at ${retirement} years old`;
}
 
const taufiq = retirementYear(2024, 1997, 'Taufiq');
console.log(taufiq);

console.log(retirementYear(2024, 1980, 'Ujang'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const pieceOfApple = cutFruitPieces(apples);
    const pieceOfOrange = cutFruitPieces(oranges);

    const juice = (`Juice with ${pieceOfApple} apple pieces and ${pieceOfOrange} orange pieces.`);
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

const retirementYear = (year, birthYear, firstName)=> {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    const yearRetire = year + retirement; 
    if (retirement > 0) {
        console.log(`${firstName} retire in ${yearRetire} at ${retirement} years old`);
    } else {
        console.log(`${firstName} has already retired`);
    }
    //return `${firstName} retire in ${yearRetire} at ${retirement} years old`;
}

retirementYear(2024, 1997, 'Taufiq');
retirementYear(2024, 1970, 'Tati');

const calcAverage = (a, b, c) => (a+b+c)/3;

// test data 1
const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins1, avgKoalas1) => {
    if (avgDolphins1>= 2*avgKoalas1) {
        console.log(`Game 1 Dolphins win the Trophy (${avgDolphins1} vs. ${avgKoalas1})`);
    } else if (avgKoalas1 >= 2*avgDolphins1) {
        console.log(`Game 1 Dolphins win the Trophy (${avgDolphins1} vs. ${avgKoalas1})`);
    } else {
        console.log('No one win the Trophy at Game 1');
    }
}

checkWinner(scoreDolphins1, scoreKoalas1);

// test data 2
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

const checkWinner2 = (avgDolphins2, avgKoalas2) => {
    if (avgDolphins2>= 2*avgKoalas2) {
        console.log(`Game 2 Dolphins win the Trophy (${avgDolphins2} vs. ${avgKoalas2})`);
    } else if (avgKoalas2 >= 2*avgDolphins2) {
        console.log(`Game 2 Dolphins win the Trophy (${avgDolphins2} vs. ${avgKoalas2})`);
    } else {
        console.log('No one win the Trophy at Game 2');
    }
}

checkWinner2(scoreDolphins2, scoreKoalas2);

const friend1 = 'Ujang';
const friend2 = 'Bagas';
const friend3 = 'Asep';

const friends = ['Ujang', 'Bagas', 'Asep'];
console.log(friends);

const y = new Array (2002, 2005, 2010);

console.log(friends[0], friends[2]);

console.log(friends.length);
console.log(friends[friends.length-2]);

friends[2] = 'Jamal';
console.log(friends[2]);
// friends = ['Bobi', 'Juki', 'Sarip']; // Errorr

const firstName = 'Jamal';
const jamal = [firstName, 'Mirdad', 2024-1997, 'teacher', friends];
console.log(jamal);
console.log(jamal.length);


const calcAge = function (birthYear) {
    return 2024 - birthYear;
}
const year = [1990, 1890, 1978, 1990, 1997, 1908];
const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[2]);
console.log(age1, age2, age3);

const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[2]), calcAge(year[3]), calcAge(year[4]), calcAge(year[5])];
console.log(ages);

const friends = ['Ujang', 'Bagas', 'Asep'];

// add elements
const newLength = friends.push ('Indra');
console.log(friends);
console.log(newLength);

friends.unshift('Jaja');
console.log(friends);

// remove elements
friends.pop(); // last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('Ujang'));

friends.push(23);
console.log(friends.includes('Bagas'));
console.log(friends.includes(23));

if(friends.includes('Bagas')) {
    console.log('Kamu punya teman bernama Bagas');
}


// CHALLENGE #2
// Steven wants you to improve his tip calculator, 
using the same rules as before — tip 15% of the bill if the 
bill value is between 50 and 300, and if the value is different, 
the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value 
as an input and returns the corresponding tip, 
calculated based on the rules above 
(you can check out the code from the first tip calculator 
challenge if you need to). Use the function type you like 
the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called 
bills containing the test data below.

// Create an array called tips containing the tip value for
 each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values
, so the bill + tip.

// TEST DATA: 125, 555, and 44.



// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

const bills = [125, 555, 44];
const calcTip = function(bill) {
    return 50<=bill && bill<=300 ? bill*0.15 : bill*0.2;
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [(bills[0]+tips[0]), (bills[1]+tips[1]), (bills[2]+tips[2])]
console.log(totals);


const taufiqArray = [
    'Taufiq',
    'Wibawa',
    2024 - 1997,
    'Engineer',
    ['Fahry', 'Reksa', 'Kris']
];

const taufiqNew = {
    firstName: 'Taufiq',
    lastName: 'Wibawa',
    age: 2024 - 1997,
    job: 'Engineer',
    friends: ['Fahry', 'Reksa', 'Kris']
};

console.log(taufiqArray, taufiqNew);
console.log(taufiqNew.lastName);
console.log(taufiqNew['lastName']);

const nameKey = 'Name';
console.log(taufiqNew['first' + nameKey]); // Taufiq
console.log(taufiqNew['last' + nameKey]); // Wibawa

// console.log(taufiqNew.'first' + nameKey); didnt work // error

const interestedIn = prompt ('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(taufiqNew[interestedIn]);

if(taufiqNew[interestedIn]) {
    console.log(taufiqNew[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

taufiqNew.location = 'Indonesia';
taufiqNew['twitter'] = '@Taufiqwim';
console.log(taufiqNew)

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"


const jonasFriends = [
    'Michael', 
    'Bob', 
    'Jacob'
];

jonasFriends.bestFriend = 'Michael';

// const interestedIn = prompt ('Who is jonas best friend? Michael, Bob or Jacob');
// if(jonasFriends[interestedIn] = jonasFriends.bestFriend) {
//     console.log('Correct jonas best friend is Michael :)');
// } else {
//     console.log(`Wrong answer!`);
// }

// ${jonasFriends[interestedIn]} is not his best friend


const taufiqNew = {
    firstName: 'Taufiq',
    lastName: 'Wibawa',
    birthYear: 1997,
    job: 'Engineer',
    friends: ['Fahry', 'Reksa', 'Kris'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }
    calcAge: function () {
        // console.log(this);
        this.age = 2024 - this.birthYear;
        return this.age;
    }

    
};

console.log(taufiqNew.calcAge());
console.log(taufiqNew.age);
console.log(taufiqNew.age);


console.log(`${taufiqNew.firstName} is a ${taufiqNew.age}-years old ${taufiqNew.job}, and ${taufiqNew.hasDriverLicense? 'has':'dont have'} a driver License`)

// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). 
Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). 
Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: 
"John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



// 👋 OPTIONAL: You can watch my solution in video format in the next lecture



// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula 
mass / (height * height), and not this one mass / (height ** 2).


// Write your code below. Good luck! 🙂

const mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    mass : 78,
    height : 1.69,
    
    calcBMI : function () {
        this.bmi = this.mass / (this.height**2) ;
        return this.bmi ;
       
    }
}

const john = {
    firstName : 'John',
    lastName : 'Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function () {
        this.bmi = this.mass / (this.height**2) ;
        return this.bmi ;
    }    
}

console.log(john.calcBMI());
console.log(mark.calcBMI());

console.log(`${mark.firstName +' '+ mark.lastName}'s BMI (${mark.bmi}) is ${mark.bmi>john.bmi ? 'higher':'lower'} than ${john.firstName +' '+ john.lastName}'s BMI (${john.bmi}) `);

// FOR LOOP //
console.log('Avenged 1fold');
console.log('Avenged 2fold');
console.log('Avenged 3fold');
console.log('Avenged 4fold');
console.log('Avenged 5fold');
console.log('Avenged 6fold');
console.log('Avenged 7fold');

for (let fold = 1; fold <= 7; fold++) {
    console.log(`Avenged ${fold} fold`);
}


const taufiq = [
    'Taufiq',
    'Wibawa',
    2024 - 1997,
    'Engineer',
    ['Fahry', 'Reksa', 'Kris']
];

const types = [];

// console.log(taufiq[0]);
// console.log(taufiq[1]);
// console.log(taufiq[2]);
// console.log(taufiq[3]);
// console.log(taufiq[4]);

for (let d = 0; d < taufiq.length; d++) {
    // Reading from taufiq array
    console.log(taufiq[d], typeof taufiq[d]);

    // Filling types of array
    // types [d] = typeof taufiq [d];
    types.push(typeof taufiq[d]);
}

console.log(types);


const years = [1991, 1993, 1995, 1997, 2000]
const ages = [];

for (let i = 0; i < years.length; i++ ) {
    ages.push(2023 - years[i]);
}
console.log(ages);

// ------Continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < taufiq.length; i++) {
    if (typeof taufiq[i] !== 'string') continue;

    console.log(taufiq[i], typeof taufiq[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < taufiq.length; i++) {
    if (typeof taufiq[i] !== 'number') continue;

    console.log(taufiq[i], typeof taufiq[i]);
}

// 0,1....,4
// 4,3....,0

for (let i = taufiq.length - 1; i >= 0; i--) {
    console.
    log(taufiq[i]);
}

// -------Loop inside loop

for (let exercise = 1 ; exercise < 4; exercise++) {
    console.log(`-------Starting exercise ${exercise}`);
    for (let reps = 1; reps < 6; reps++ ) {
        console.log(`Lifting weight repetition ${reps}`);
    }
}



// -------WHILE LOOP

let reps = 1;
while (reps <= 10) {
    // console.log(`WHILE: Lifting weights repetitions ${reps}`);
    reps++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice)

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end....');
} 

// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) 
// for every bill value in the bills array. Use a for loop to perform the 10 calculations!



// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



// BONUS:

// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in 
// the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. 
// Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the 
// loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.



const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill) {
    return 50<=bill && bill<=300 ? bill*0.15 : bill*0.2;
}

for (let i = 0; i < bills.length; i++ ) {
    tips.push(calcTip(bills[i]));
}
console.log(tips);

for (let i = 0; i < bills.length && i < tips.length; i++ ) {
    totals.push(bills[i] + tips [i]);
}
console.log(totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/