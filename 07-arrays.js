// ============================================
// 07 - ARRAYS
// ============================================
// An array is an ORDERED LIST of values.
// Index starts at 0 (first item = index 0).

const fruits = ["apple", "banana", "mango"];

// ---- Access ----
console.log(fruits[0]);           // apple
console.log(fruits[2]);           // mango
console.log(fruits.length);       // 3
console.log(fruits[fruits.length - 1]); // last item: mango

// ---- Change ----
fruits[1] = "orange";
console.log(fruits); // ["apple", "orange", "mango"]

// ---- Add and remove ----
fruits.push("grapes");     // add to END
fruits.unshift("kiwi");    // add to START
fruits.pop();              // remove from END
fruits.shift();            // remove from START
console.log(fruits);

// ---- Search ----
console.log(fruits.includes("apple")); // true
console.log(fruits.indexOf("mango"));  // position, or -1 if missing

// ---- Slice and splice ----
const nums = [1, 2, 3, 4, 5];
console.log(nums.slice(1, 3));  // [2, 3]  copy part (original unchanged)
nums.splice(1, 2);              // remove 2 items starting at index 1
console.log(nums);              // [1, 4, 5]

// ---- Join and reverse ----
console.log(["a", "b", "c"].join("-")); // a-b-c
console.log([1, 2, 3].reverse());       // [3, 2, 1]

// ---- Powerful array methods ----
const numbers = [1, 2, 3, 4, 5];

// forEach — do something for each item
numbers.forEach((n) => console.log(n));

// map — make a NEW array by changing each item
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter — keep only items that pass a test
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4]

// find — first item that passes the test
const firstBig = numbers.find((n) => n > 3);
console.log(firstBig); // 4

// reduce — combine all items into ONE value
const total = numbers.reduce((sum, n) => sum + n, 0);
console.log(total); // 15

// sort
console.log([3, 1, 2].sort()); // [1, 2, 3]
console.log([10, 9, 1].sort((a, b) => a - b)); // [1, 9, 10]

// ---- Array of arrays ----
const matrix = [[1, 2], [3, 4]];
console.log(matrix[1][0]); // 3
