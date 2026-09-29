// ============================================
// 10 - ASYNCHRONOUS JAVASCRIPT
// ============================================
// Some tasks take time (loading data, timers).
// JS doesn't wait — it keeps running other code.
// "Async" is how we handle that.

// ---- setTimeout: run code after a delay ----
console.log("1. Start");
setTimeout(() => {
  console.log("3. Runs after 2 seconds");
}, 2000);
console.log("2. End");
// Output order: 1, 2, then 3 (JS didn't wait!)

// ---- setInterval: repeat every X ms ----
let count = 0;
const timer = setInterval(() => {
  count++;
  console.log("Tick", count);
  if (count === 3) clearInterval(timer); // stop it
}, 1000);

// ---- Promises ----
// A promise is "I will give you a result later".
// States: pending -> fulfilled (resolve) OR rejected (reject)
const promise = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) resolve("Data loaded ✅");
    else reject("Something went wrong ❌");
  }, 1000);
});

promise
  .then((result) => console.log(result))  // when it works
  .catch((error) => console.log(error))   // when it fails
  .finally(() => console.log("Done"));    // always runs

// ---- async / await (easiest way) ----
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Waiting...");
  await wait(1500); // pause here until the promise finishes
  console.log("Finished waiting!");
}
run();

// ---- Fetching data from the internet ----
async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.log("Failed:", error.message);
  }
}
getUser();
