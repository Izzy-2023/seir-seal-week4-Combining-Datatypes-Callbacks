// ******************************************
// Combine objects, arrays, and functions
// ******************************************

// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
    crayons: ["red", "orange", "yellow", "blue", "green"]
}

console.log(crayonBox.crayons[3]) // Output: Blue

// Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle = {
    cap: ["metal", "plastic"],
    color: ["blue", "white"],
}

console.log(bottle.cap[1]) // plastic
console.log(bottle.color[1]) // white

// Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
const receipt = [
    { name: "oranges", price: 4.99 },
    { name: "bananas", price: 1.98 },
]

console.log(receipt[1].name) // bananas
console.log(receipt[1].price) // 1.98

// Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
const apartmentBuilding = [
    100, 
    101, 
    102,
    ['Michael', 'David', "Jason"]
]; 

console.log(apartmentBuilding[3][1]) // David

// ********************************************
// Combine objects, arrays, and functions
// ********************************************

// Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
const knittedItem = knit("scarf", 6)
function knit(item, size){
    return{
    item: "scarf",
    size: 6,
}
}

console.log(knittedItem.size)

// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

const crayonWT = crayonSelector(1,2)
function crayonSelector(width, texture) {
    return {
    width: 1.2,
    texture: "soft",
}
}

console.log(crayonWT.width) // 1.2
console.log(crayonWT.texture) // soft

// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function.
function powerButton() {
    function options() {
      console.log("Select a song");
    }
    return options;
  }
  
  const optionsFunction = powerButton();
  optionsFunction(); // Output: Select a song

// ********************************************
// Model a Vending Machine
// ********************************************

// Model a Vending Machine Model a vending machine

// a vending machine is an object
const vendingMachine = {
// it has an array of snacks (make 3 snacks)
snacks: [
// snacks are objects that have a name and a price
{ name: 'Chips', price: 1.50 },
{ name: 'Candy', price: 2.00 },
{ name: 'Soda', price: 1.75 }
],
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
vend: function(snackIndex) {
    if (snackIndex < 0 || snackIndex >= this.snacks.length) {
      console.log('Invalid snack index');
      return;
    }
    const snack = this.snacks[snackIndex];
    console.log(`You have purchased ${snack.name} for ${snack.price}`);
  }
};

// Be able to call vendingMachine.vend() with a valid integer to return a snack  
  vendingMachine.vend(0); // Purchase the first snack (chips for 1.5)
  
// *****************************************
// Callbacks
// *****************************************

// Make a function add that takes two arguments (numbers) and sums them together

function add(num1,num2){
     return num1 + num2;
}
console.log(add(5,10)) // Output: 15

// Make a function subtract that takes two arguments (numbers) and subtracts them
function subtract(sub1,sub2){
    return sub1 - sub2;
}
console.log(subtract(100,25)) // Output: 75
// Make a function multiply that takes two arguments and multiplies them
function multiply(mult1,mult2){
    return mult1 * mult2;
}

console.log(multiply(8,9)) // Output: 72
// Make a function divide that takes two arguments and divides them
function divide(div1, div2){
    return div1 / div2;
}

console.log(divide(20,5)) // Output: 4
// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
function calculate(num1, num2, operates) {
    return operates(num1, num2);
  }
// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// Call calculate 4 times, each time using one of the operation functions you wrote
console.log(calculate(20, 5, add)); // Output: 25
console.log(calculate(30, 20, subtract)); // Output: 10
console.log(calculate(8, 9, multiply)); // Output: 72
console.log(calculate(65, 5, divide)); // Output: 13

// ****************************************
// Function definition placement
// ****************************************

const bar = () => {
    console.log('bar here');
  };
  
  const foo = () => {
    console.log('foo here');
  };
  
  bar();
  foo();
  
// *****************************************
// Error reading
// *****************************************

// What is meant by the error(s) this produces?

// The error is that the foo() function is called before it is defined. In JavaScript, function declarations are hoisted, meaning that they are moved to the top of the scope before the code is executed. However, function expressions are not hoisted, so they must be defined before they are used.

// In this case, the foo() function is a function expression, so it is not hoisted. Therefore, it cannot be called before it is defined. This causes the error "foo is not defined".

// foo1();

// const foo1 ()=>{
//     console.log('hi');
// }

// To fix this error, we need to move the definition of the foo() function to the top of the code, before the function call:

const foo2 = () => {
    console.log('hi');
  };
  
  foo2();