console.log("This is my first program. Hello World ");
console.log("My Name is Idris Nasir");
let hour = 10;
if (hour < 12) {
  console.log('Good morning!'); // Output: Good morning!
} else {
  console.log('Good afternoon');
}

for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  greet('Idris'); // Output: Hello, Idris!
  function checkScope() {
    if (true) {
      var varVariable = 'Inside if'; // var has function scope
      
    }
    console.log(varVariable); // Output: Inside if
   
  }
  checkScope();
  // Object example
  let person = {
    name: 'Alice',
    age: 25,
    hobbies: ['reading', 'painting']
  };
  console.log(person.name); // Output: Alice

  // Array example
  let numbers = [1, 2, 3, 4, 5];
  console.log(numbers[2]); // Output: 3
  let numberString = '42';
  let convertedNumber = Number(numberString); // Convert string to number
  console.log(numberString);
  console.log(convertedNumber);
  let num = 10;
if (num > 0) {
  console.log('Number is positive');
}
let temperature = 25;
if (temperature > 30) {
  console.log('It\'s hot outside');
} else {
  console.log('It\'s moderate temperature');
}
let secondhour = 14;
if (hour < 12) {
  console.log('Good morning');
} else if (secondhourhour >= 12 && secondhourhour < 18) {
  console.log('Good afternoon');
} else {
  console.log('Good evening');
}
let day = 'Thursday';
switch (day) {
  case 'Monday':
    console.log('Start of the week');
    break;
  case 'Tuesday':
    console.log('Second day of the week');
    break;
  case 'Wednesday':
    console.log('Middle of the week');
    break;
  default:
    console.log('Another day of the week');
}
// Function to add two numbers
function add(a, b) {
  return a + b;
}
const result = add(5,6);
console.log(result);

// Function without parameters
function sayHello() {
  console.log("Hello, world!");
}
sayHello();
// Function with default parameter
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}
greet("idris");
greet();
// Function to calculate the square of a number
function square(x) {
  return x * x;
}
const results = square(4);
console.log(results);  // Output: 16
function exampleScope() {
  let localVar = "I am local to this function";
  console.log(localVar);
}
exampleScope();      // Output: I am local to this function

function outerFunction() {
  let outerVar = "I am outer";

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}
const closureFunction = outerFunction();
closureFunction();   // Output: I am outer
// Factorial calculation using recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n-1)
  }
}
console.log(factorial(5));  // Output: 120

function fibonacci(n) {
 if (n <= 1) {
  return n; } else {
return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
 console.log(fibonacci(6));  // Output: 8 (0, 1, 1, 2, 3, 5, 8)
 const fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0]);  // Output: 'apple'

fruits[1] = 'grape';
console.log(fruits);  // Output: ['apple', 'grape', 'orange']
const numberss = [1, 2, 3, 4, 5];

// Using forEach
numbers.forEach((num) => {
  console.log(num);  // Output: 1, 2, 3, 4, 5
});
const persons = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(persons.name);  // Output: 'John'

const propertyName = 'age';
console.log(persons[propertyName]);  // Output: 30
const student = {
  name: 'Islamiyah',
  age: 25,
  grades: [90, 85, 95],

  // Method to calculate average grade
  calculateAverage: function () {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }
};

console.log(student.name);               // Output: 'Alice'
console.log(student.calculateAverage());  // Output: Average grade

const car = {
make: 'Honda',
model: 'Accord',
year: 2020
};
// Using for...in loop
for (const key in car) {
console.log(`${key}: ${car[key]}`);
}
// Using Object.keys
const keys = Object.keys(car);
console.log(keys); // Output: ['make', 'model', 'year']
// Using Object.values
const values = Object.values(car);
console.log(values); // Output: ['Honda', 'Accord', 2020]
// Using Object.entries
const entries = Object.entries(car);
console.log(entries); // Output: [['make', 'Honda'], ['model', 'Accord'], ['year', 2020]]

let array =[];
for (let j = 1; j <= 6; j++) {
  array.push(j);
}
array.reverse();
console.log(array);

let set = [1,1,2,2,3,3,4,4,5,5,6,6];
let uniqueNumbers = [...new
  Set(set)];
console.log(uniqueNumbers);
//    typeof("name");
const alHikmahSchool = {
  schoolName: 'Al-Hikmah',
  location: 'Ilorin, Kwara State',
  courses: ['Information Systems', 'Software Development']
};
// console.log('typeof --> ', typeof alHikmahSchool);
// console.log(Object.keys(alHikmahSchool));
// console.log(Object.values(alHikmahSchool));
// console.log(Object.entries(alHikmahSchool));
console.log('=================================')
for (const item of Object.entries(alHikmahSchool)) {
  console.log(Array.isArray(item));
  console.log(item);
  const [a, b] = item;
  console.log('this is a key: %s and this is a value %s', a, b);
}
const { location} = alHikmahSchool;
console.log(location);
console.log('=============================')
// Asynchronous Example :
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation, e.g., fetching data
  const success = true;
  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});
myPromise
  .then((result) => {
    console.log(result); // Output: Operation successful
  })
  .catch((error) => {
    console.error(error); // Output: Operation failed
  });
 // Async/Await :
 async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 2000);

console.log('End');

/*Accessing DOM Elements:
JavaScript provides several methods for accessing DOM elements:

- getElementById: Retrieves an element by its unique ID attribute.
- getElementsByClassName: Retrieves elements by their class name.
- getElementsByTagName: Retrieves elements by their tag name.
- querySelector: Retrieves the first element that matches a CSS selector.
- querySelectorAll: Retrieves all elements that match a CSS selector.
Accessing DOM elements
const elementById = document.getElementById('myElement');
const elementsByClass = document.getElementsByClassName('myClass');
const elementsByTag = document.getElementsByTagName('div');
const elementByQuery = document.querySelector('.myClass');
const elementsByQueryAll = document.querySelectorAll('.myClass');
*/



