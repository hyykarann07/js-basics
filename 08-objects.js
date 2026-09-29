// ============================================
// 08 - OBJECTS
// ============================================
// An object stores data as KEY: VALUE pairs.
// Great for describing real things (a person, a car, a product).

const person = {
  name: "Riya",
  age: 20,
  isStudent: true,
  hobbies: ["reading", "coding"],
};

// ---- Access ----
console.log(person.name);       // dot notation
console.log(person["age"]);     // bracket notation
console.log(person.hobbies[0]); // reading

// ---- Add, change, delete ----
person.city = "Patna";  // add
person.age = 21;        // change
delete person.isStudent; // delete
console.log(person);

// ---- Methods: functions inside objects ----
const user = {
  name: "Aman",
  sayHi() {
    console.log("Hi, I am " + this.name);
  },
};
user.sayHi(); // Hi, I am Aman
// "this" means "the object this method belongs to"

// ---- Loop through an object ----
for (const key in person) {
  console.log(key + ":", person[key]);
}

console.log(Object.keys(person));    // all keys
console.log(Object.values(person));  // all values
console.log(Object.entries(person)); // [key, value] pairs

// ---- Check if a key exists ----
console.log("name" in person);              // true
console.log(person.hasOwnProperty("email")); // false

// ---- Nested objects ----
const student = {
  name: "Riya",
  address: { city: "Patna", state: "Bihar" },
};
console.log(student.address.city); // Patna
console.log(student.phone?.number); // undefined (optional chaining: no error)

// ---- Copying objects ----
const copy = { ...person }; // spread copy
copy.name = "Changed";
console.log(person.name); // still Riya

// ---- Array of objects (very common) ----
const students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
];
const passed = students.filter((s) => s.marks >= 50);
console.log(passed); // [{ name: "A", marks: 80 }]
