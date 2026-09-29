// ============================================
// 09 - MODERN JAVASCRIPT (ES6+)
// ============================================
// Newer features that make code shorter and cleaner.

// ---- Template literals ----
const name = "Riya";
const age = 20;
console.log(`My name is ${name} and I am ${age} years old.`);
console.log(`2 + 3 = ${2 + 3}`);

// ---- Destructuring (unpack values) ----
// Arrays
const [first, second] = ["apple", "banana"];
console.log(first, second);

// Objects
const person = { name: "Aman", city: "Patna", age: 22 };
const { city } = person;
console.log(city); // Patna

// ---- Spread operator (...) ----
const a = [1, 2];
const b = [3, 4];
console.log([...a, ...b]); // [1, 2, 3, 4]

const base = { x: 1 };
const extended = { ...base, y: 2 };
console.log(extended); // { x: 1, y: 2 }

// ---- Rest parameters (collect many arguments) ----
function total(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}
console.log(total(1, 2, 3, 4)); // 10

// ---- Arrow functions ----
const double = (n) => n * 2;
console.log(double(5));

// ---- Optional chaining ?. ----
const user = {};
console.log(user.address?.city); // undefined, no error

// ---- Nullish coalescing ?? ----
console.log(null ?? "default");  // default
console.log(0 ?? "default");     // 0 (0 is a real value)

// ---- Short object property ----
const title = "JS";
const book = { title }; // same as { title: title }
console.log(book);

// ---- Modules (splitting code into files) ----
// export const PI = 3.14;            // in math.js
// import { PI } from "./math.js";    // in another file

// ---- Classes ----
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}
new Animal("Cat").speak(); // Cat makes a sound
new Dog("Bruno").speak();  // Bruno barks

// ---- Set and Map ----
const unique = new Set([1, 2, 2, 3]);
console.log(unique); // Set { 1, 2, 3 }

const scores = new Map();
scores.set("Riya", 90);
console.log(scores.get("Riya")); // 90
