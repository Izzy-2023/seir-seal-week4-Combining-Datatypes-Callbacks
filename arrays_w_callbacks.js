// ****************************************
// Section 3 Array Methods with Callbacks
// ****************************************

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// **************************
// Every
// **************************

// Determine if every number is greater than or equal to 0
let allNums = true;

for (const num of nums) {
  if (num < 0) {
    allNums = false;
    break;
  }
}

console.log(allNums); // Output: true

// determine if every word shorter than 8 characters

let allShortWords = true;

for (const word of panagram) {
  if (word.length >= 8) {
    allShortWords = false;
    break;
  }
}

// ********************************
// Filter
// ********************************

// filter the array for numbers less than 4
const filteredNumbers = nums.filter(number => number < 4);

console.log(filteredNumbers);
// filter words that have an even length
const filteredWords = panagram.filter(word => word.length % 2 === 0)

console.log(filteredWords);

// *******************************
// Find
// *******************************

// Find the first value divisible by 5
const divBy5 = nums.find(num => num % 5 === 0);
console.log(divBy5)
// find the first word that is longer than 5 characters
const firstLongWord = panagram.find(word => panagram.length > 5);

console.log(firstLongWord); 

// *******************************
// Find Index
// *******************************

// find the index of the first number that is divisible by 3
const firstDiv3Index = nums.findIndex(num => nums % 3 === 0);
console.log('Index of first divisible by 3:', firstDiv3Index); // Output: 2
// find the index of the first word that is less than 2 characters long
const firstShortWordIndex = panagram.findIndex(word => panagram.length < 2);
console.log('Index of first word less than 2 characters long:', firstShortWordIndex);

// ********************************
// For Each
// ********************************

// console.log each value of the nums array multiplied by 3
nums.forEach(num => console.log(num * 3));
// console.log each word with an exclamation point at the end of it
panagram.forEach(word => console.log(word + '!'));

// *****************************
// Thought Questions
// *****************************

// What happened to the original array?
// -- The forEach() method does not modify the original array, it iterates over the elements of the array and performs the specified operation on each element. To store the modified values in a new array, we can use the map() method.
// Can you store the values from a forEach method in a new array?
// -- Yes, we can store the values from a forEach() method in a new array
