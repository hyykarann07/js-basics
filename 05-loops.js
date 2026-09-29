// ============================================
// 05 - LOOPS
// ============================================
// Loops REPEAT code so you don't write it many times.

// ---- for loop ----
// for (start; condition; step)
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}
// 1 2 3 4 5

// ---- while loop ----
// Runs while the condition is true
let n = 1;
while (n <= 3) {
  console.log("While:", n);
  n++;
}

// ---- do...while loop ----
// Runs AT LEAST once, then checks the condition
let k = 10;
do {
  console.log("Do-while:", k);
  k++;
} while (k < 5);
// prints once even though the condition is false

// ---- for...of : loop through array values ----
const fruits = ["apple", "banana", "mango"];
for (const fruit of fruits) {
  console.log(fruit);
}

// ---- for...in : loop through object keys ----
const person = { name: "Riya", age: 20 };
for (const key in person) {
  console.log(key, "=", person[key]);
}

// ---- break and continue ----
for (let i = 1; i <= 10; i++) {
  if (i === 3) continue; // skip 3
  if (i === 6) break;    // stop the loop at 6
  console.log("i =", i);
}
// 1 2 4 5

// ---- Example: multiplication table ----
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
