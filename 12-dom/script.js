// ============================================
// 12 - DOM (Document Object Model)
// ============================================

// ---- 1. Select elements ----
const title = document.getElementById("title");
const changeBtn = document.querySelector("#changeText");
const colorBtn = document.querySelector("#toggleColor");
// Other ways: document.querySelectorAll(".class"), getElementsByClassName

// ---- 2. Change content ----
changeBtn.addEventListener("click", () => {
  title.textContent = "You clicked the button! 🎉";
});

// ---- 3. Change style / classes ----
colorBtn.addEventListener("click", () => {
  title.classList.toggle("highlight"); // add or remove the class
});
// You can also do: title.style.color = "red";

// ---- 4. Counter (events + variables) ----
let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("plus").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("minus").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// ---- 5. Mini to-do list (create elements) ----
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

document.getElementById("addTask").addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return; // ignore empty input

  const li = document.createElement("li"); // create element
  li.textContent = text;

  li.addEventListener("click", () => li.remove()); // click to delete

  list.appendChild(li); // add to the page
  input.value = "";     // clear the input
});

// Common events: click, input, submit, keydown, mouseover, change, load
