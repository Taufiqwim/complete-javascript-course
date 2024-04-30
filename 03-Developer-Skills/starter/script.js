// Remember, we're gonna use strict mode in all scripts now!

'use strict';
/*
// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2024 - birthYear;
// console.log(calcAge(1997));

// PROBLEM 1
// 1. Find the temperature amplitude from the arrays
// 2. Avoid an "error" message comes up to the console log
const temps = [-3, -2, -1, 0, 'error', 11, 15, 17, 33];

const calcAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemps = temps[i];
    if (typeof curTemps !== 'number') continue;

    if (curTemps > max) max = curTemps;
    if (curTemps < min) min = curTemps;
  }
  console.log(min, max);
  return max - min;
};

const amplitude = calcAmplitude(temps);
console.log(amplitude);

// PROBLEM 2
// Function should now receive 2 arrays of temps

// 1) Understanding the problems
// - With 2 arrays, should we implement functionality
//   twice? NO! just merge 2 arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);

const calcAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemps = temps[i];
    if (typeof curTemps !== 'number') continue;

    if (curTemps > max) max = curTemps;
    if (curTemps < min) min = curTemps;
  }
  console.log(min, max);
  return max - min;
};

const amplitudeNew = calcAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    value: Number(prompt('Degree Celcius:')),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.table(measureKelvin());


// DEBUGGING WITH CONSOLE AND BREAKPOINT
// GO TO INSPECT ELEMENT =>> SOURCE TO DEBUG WITH BREAKPOINT

const calcAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0; 
  let min = 0; // Bugnya disini, temps 0 akan terbaca sehingga jika dalam array tidak ada yang lebih kecil dari 0 maka min temps hasilnya akan 0

  for (let i = 0; i < temps.length; i++) {
    const curTemps = temps[i];
    if (typeof curTemps !== 'number') continue;

    if (curTemps > max) max = curTemps;
    if (curTemps < min) min = curTemps;
  }
  console.log(min, max);
  return max - min;
};

const amplitudeBug = calcAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeNew);


// Coding challenge #1
Given an array of forecasted max temperatures, the thermometer
displays a string with these temperatures.

Ex: [17, 21, 23] will print "...17oC in 1 days, ... 21oC in 2 days
... 23oC in 3 days.."

create a function 'printForecast' wich takes in an array
'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem, and
break it up into subproblem

TEST DATA 1 : [17, 21, 23]
TEST DATA 2 : [12, 5, -5, 0, 4]
*/

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}oC in day ${i + 1} ... `;
  }
  console.log('... ' + str);
};

printForecast(temps1);
printForecast(temps2);
