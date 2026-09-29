// ============================================
// 06 - FUNCTIONS
// ============================================
// A function is a reusable block of code.
// Write it once, use it many times.

// ---- Function declaration ----
function sayHello() {
  console.log("Hello!");
}
sayHello(); // call the function

// ---- Parameters and arguments ----
// name is a PARAMETER, "Riya" is the ARGUMENT
function greet(name) {
  console.log("Hello, " + name);
}
greet("Riya");
greet("Aman");

// ---- Return a value ----
function add(a, b) {
  return a + b;
}
let result = add(3, 4);
console.log(result); // 7

// ---- Default parameters ----
function welcome(name = "Guest") {
  console.log(`Welcome, ${name}`);
}
welcome();        // Welcome, Guest
welcome("Riya");  // Welcome, Riya

// ---- Function expression ----
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(3, 5)); // 15

// ---- Arrow function (short modern syntax) ----
const square = (x) => x * x;
console.log(square(6)); // 36

const sum = (a, b) => {
  return a + b;
};

// ---- Scope: where a variable can be used ----
let globalVar = "I am global";
function testScope() {
  let localVar = "I am local";
  console.log(globalVar); // ✅ works
  console.log(localVar);  // ✅ works
}
testScope();
// console.log(localVar); // ❌ Error: only exists inside the function

// ---- Callback: a function passed to another function ----
function doTwice(action) {
  action();
  action();
}
doTwice(() => console.log("Hi!"));

// ---- Example: check even or odd ----
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false
