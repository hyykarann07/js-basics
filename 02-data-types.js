// ============================================
// 02 - DATA TYPES
// ============================================
// Every value in JavaScript has a TYPE.
// Use typeof to check the type.

// ---- Primitive types (simple values) ----

// 1. String — text, inside quotes
let name = "Riya";
let greeting = 'Hello';
let message = `Hi ${name}`; // backticks allow ${variables}
console.log(typeof name); // "string"
console.log(message);     // Hi Riya

// 2. Number — integers and decimals
let apples = 10;
let price = 99.5;
console.log(typeof apples); // "number"
console.log(10 / 3);        // 3.3333333333333335
console.log("abc" * 2);     // NaN (Not a Number)

// 3. Boolean — true or false
let isStudent = true;
let isRaining = false;
console.log(typeof isStudent); // "boolean"

// 4. undefined — a variable with no value yet
let notSet;
console.log(notSet);         // undefined
console.log(typeof notSet);  // "undefined"

// 5. null — "nothing" on purpose
let empty = null;
console.log(empty); // null

// 6. BigInt — very large numbers
let big = 123456789012345678901234567890n;
console.log(typeof big); // "bigint"

// 7. Symbol — unique identifier (advanced, rarely needed at first)
let id = Symbol("id");
console.log(typeof id); // "symbol"

// ---- Non-primitive types ----
let fruits = ["apple", "banana"];        // Array
let person = { name: "Riya", age: 20 };  // Object
function sayHi() {}                      // Function
console.log(typeof fruits); // "object" (arrays are objects)
console.log(typeof person); // "object"
console.log(typeof sayHi);  // "function"

// ---- Type conversion ----
console.log(Number("42"));   // 42
console.log(String(42));     // "42"
console.log(Boolean(0));     // false
console.log(Boolean("hi"));  // true
console.log("5" + 2);        // "52" (string joining!)
console.log("5" - 2);        // 3    (converted to number)

// ---- Falsy values (treated as false) ----
// false, 0, "", null, undefined, NaN
// Everything else is truthy.
