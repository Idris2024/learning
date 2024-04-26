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





