// ============================================
// 01 - VARIABLES
// ============================================
// A variable is a NAMED BOX that stores a value.
// You can use the name later to get the value back.

// ---- let: value CAN change ----
let age = 20;
console.log(age); // 20

age = 21; // changed the value
console.log(age); // 21

// ---- const: value CANNOT change ----
const country = "India";
console.log(country); // India
// country = "USA"; // ❌ Error: Assignment to constant variable

// ---- var: the OLD way ----
// Works, but has confusing behavior. Prefer let and const.
var oldWay = "avoid me";
console.log(oldWay);

// ---- Which one should I use? ----
// 1. Use const by default.
// 2. Use let only if the value must change.
// 3. Avoid var.

// ---- Naming rules ----
// ✅ Can contain letters, numbers, _ and $
// ✅ Cannot start with a number
// ✅ Case-sensitive: name and Name are different
// ✅ Cannot use reserved words like let, if, class

let firstName = "Aman";      // camelCase — the JS style
let _score = 10;
let $price = 99;
// let 1name = "x";          // ❌ starts with number

// ---- Declare first, assign later ----
let city;
console.log(city); // undefined (no value yet)
city = "Patna";
console.log(city); // Patna
