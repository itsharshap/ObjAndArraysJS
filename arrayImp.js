//Few Important Array Methods and their names with simplified examples
// 1. forEach
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) { // This method executes a provided function once for each array element
  // It takes a callback function as an argument
  console.log(num); // Output: 1 2 3 4 5
});
// 2. map
let squaredNumbers = numbers.map(function(num) { // This method creates a new array populated with the results of calling a provided function on every element in the calling array
  return num * num;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
// 3. filter
let evenNumbers = numbers.filter(function(num) { // This method creates a new array with all elements that pass the test implemented by the provided function
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]
// 4. reduce
let sum = numbers.reduce(function(accumulator, num) { // This method executes a reducer function (that you provide) on each element of the array, resulting in a single output value
  return accumulator + num;
}, 0);
console.log(sum); // Output: 15
// 5. find
let foundNumber = numbers.find(function(num) { // This method returns the value of the first element in the provided array that satisfies the provided testing function
  return num > 3;
});
console.log(foundNumber); // Output: 4
// 6. some
let hasEvenNumber = numbers.some(function(num) { // This method tests whether at least one element in the array passes the test implemented by the provided function
  return num % 2 === 0;
});
console.log(hasEvenNumber); // Output: true
// 7. every
let allEven = numbers.every(function(num) { // This method tests whether all elements in the array pass the test implemented by the provided function
  return num % 2 === 0;
});
console.log(allEven); // Output: false
// 8. includes
let includesThree = numbers.includes(3); // This method determines whether an array includes a certain value among its entries, returning true or false as appropriate
console.log(includesThree); // Output: true
// 9. indexOf
let indexOfThree = numbers.indexOf(3); // This method returns the first index at which a given element can be found in the array, or -1 if it is not present
console.log(indexOfThree); // Output: 2
// 10. slice
let slicedArray = numbers.slice(1, 4); // This method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
console.log(slicedArray); // Output: [2, 3, 4]
// 11. splice
let splicedArray = numbers.splice(1, 2); // This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log(splicedArray); // Output: [2, 3]
console.log(numbers); // Output: [1, 4, 5]
// 12. splice replace
let numbers2 = [1, 2, 3, 4, 5];
numbers2.splice(1, 2, 6, 7); // This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log(numbers2); // Output: [1, 6, 7, 4, 5]