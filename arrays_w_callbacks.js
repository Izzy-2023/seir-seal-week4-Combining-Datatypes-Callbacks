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

// ******************************
// Map
// ******************************

// make a new array of each number multiplied by 100
const multipliedNumbers = nums.map(num => num * 100);
console.log(multipliedNumbers); 
// make a new array of all the words in all uppercase
const uppercasedWords = panagram.map(word => word.toUpperCase());
console.log(uppercasedWords); 

// ******************************
// Thought Questions
// ******************************

// What happened to the original array?
// -- The original array does not change when using the map() method. The map() method creates a new array based on the original array, but it does not modify the original array. This is because the map() method takes each element of the original array and passes it to a callback function. The callback function can then perform any operation on the element, but it cannot modify the original element.

// Can you store the values from a map method in a new array?
// -- Yes, we can store the values from a map() method in a new array. The map() method returns a new array, so we can simply assign the result of the map() method to a new variable.

// ******************************
// Some
// ******************************

// Find out if some numbers are divisible by 7
const someDivisibleBy7 = nums.some(num => num % 7 === 0);
console.log('Some numbers divisible by 7:', someDivisibleBy7); // Output: true
// Find out if some words have the letter a in them
const someWithA = panagram.some(word => word.includes('a'));
console.log('Some words have "a" in them:', someWithA); // Output: true



