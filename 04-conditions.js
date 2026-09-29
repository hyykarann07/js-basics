// ============================================
// 04 - CONDITIONS
// ============================================
// Conditions let your code MAKE DECISIONS.

// ---- if ----
let age = 20;
if (age >= 18) {
  console.log("You can vote");
}

// ---- if ... else ----
let temperature = 15;
if (temperature > 25) {
  console.log("It's hot");
} else {
  console.log("It's cool");
}

// ---- if ... else if ... else ----
let marks = 72;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
// Output: Grade C

// ---- switch (many fixed choices) ----
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break; // break stops the switch
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Some other day");
}
// Output: Wednesday

// ---- Ternary (one-line if/else) ----
let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome back!" : "Please log in");

// ---- Combining conditions ----
let hasTicket = true;
let isLate = false;
if (hasTicket && !isLate) {
  console.log("Enter the show");
}
