// ============================================
// 03 - OPERATORS
// ============================================
// Operators are symbols that do something with values.

// ---- Arithmetic ----
console.log(10 + 3);  // 13  add
console.log(10 - 3);  // 7   subtract
console.log(10 * 3);  // 30  multiply
console.log(10 / 3);  // 3.33 divide
console.log(10 % 3);  // 1   remainder (modulus)
console.log(2 ** 3);  // 8   power (2 x 2 x 2)

let count = 5;
count++; // add 1
console.log(count); // 6
count--; // subtract 1
console.log(count); // 5

// ---- Assignment ----
let x = 10;
x += 5;  // same as x = x + 5
console.log(x); // 15
x -= 3;  // 12
x *= 2;  // 24
x /= 4;  // 6

// ---- Comparison (result is true or false) ----
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 >= 5);   // true
console.log(5 <= 4);   // false
console.log(5 == "5"); // true  (loose: compares value only)
console.log(5 === "5");// false (strict: compares value AND type)
console.log(5 != 3);   // true
console.log(5 !== "5");// true
// ⭐ Always prefer === and !==

// ---- Logical ----
console.log(true && false); // false  AND — both must be true
console.log(true || false); // true   OR  — at least one true
console.log(!true);         // false  NOT — flips the value

let age = 20;
console.log(age >= 18 && age <= 60); // true

// ---- String operator ----
console.log("Hello" + " " + "World"); // Hello World

// ---- Ternary operator (short if/else) ----
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult

// ---- Nullish coalescing (default value) ----
let username = null;
console.log(username ?? "Guest"); // Guest

// ---- typeof operator ----
console.log(typeof 42); // "number"
