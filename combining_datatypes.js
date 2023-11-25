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