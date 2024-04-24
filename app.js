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
