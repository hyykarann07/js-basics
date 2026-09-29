// ============================================
// 11 - ERROR HANDLING
// ============================================
// Errors happen. try/catch stops them from crashing your program.

// ---- try ... catch ----
try {
  console.log("Start");
  let x = y + 1; // y doesn't exist -> error
  console.log("This line is skipped");
} catch (error) {
  console.log("Caught an error:", error.message);
}
console.log("Program keeps running ✅");

// ---- finally: always runs ----
try {
  console.log("Trying...");
} catch (e) {
  console.log("Error");
} finally {
  console.log("Cleanup (always runs)");
}

// ---- throw: create your own error ----
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // throws
} catch (err) {
  console.log("Error:", err.message);
}

// ---- Common error types ----
// ReferenceError -> using a variable that doesn't exist
// TypeError      -> using a value the wrong way (e.g. null.name)
// SyntaxError    -> code is written incorrectly

// ---- Debugging tips ----
console.log("Simple debug message");
console.error("This shows as an error");
console.warn("This shows as a warning");
console.table([{ a: 1 }, { a: 2 }]);
// You can also use the "debugger" keyword or browser DevTools.
