//exaples of string manipulations in javascript
// 1. String concatenation
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
console.log(str3); // Output: Hello World
// 2. String interpolation
let name = "Alice";
let age = 25;
let greeting = `My name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: My name is Alice and I am 25 years old.
// 3. String length
let str = "Hello World";
let length = str.length;
console.log(length); // Output: 11
// 4. String methods
let str4 = "Hello World";
let upperStr = str4.toUpperCase();
console.log(upperStr); // Output: HELLO WORLD
let lowerStr = str4.toLowerCase();
console.log(lowerStr); // Output: hello world
let trimmedStr = "   Hello World   ";
let trimmed = trimmedStr.trim();
console.log(trimmed); // Output: Hello World
// 5. String slicing
let str5 = "Hello World";
let slicedStr = str5.slice(0, 5);
console.log(slicedStr); // Output: Hello
// 6. String splitting
let str6 = "Hello,World,JavaScript";
let splitStr = str6.split(",");
console.log(splitStr); // Output: [ 'Hello', 'World', 'JavaScript' ]
// 7. String replacement
let str7 = "Hello World";
let replacedStr = str7.replace("World", "JavaScript");
console.log(replacedStr); // Output: Hello JavaScript
// 8. String searching
let str8 = "Hello World";
let index = str8.indexOf("World");
console.log(index); // Output: 6
let includesWorld = str8.includes("World");
console.log(includesWorld); // Output: true
// 9. String reversal
let str9 = "Hello World";
let reversedStr = str9.split("").reverse().join("");
console.log(reversedStr); // Output: dlroW olleH
// 10. String comparison
let str10a = "Hello";
let str10b = "World";
let comparison = str10a.localeCompare(str10b);
console.log(comparison); // Output: -1 (because "Hello" comes before "World")
// 11. String padding
let str11 = "5";
let paddedStr = str11.padStart(3, "0");
console.log(paddedStr); // Output: 05
let paddedStr2 = str11.padEnd(3, "0");
console.log(paddedStr2); // Output: 500
// 12. String template literals
let str12 = "Hello";
let str13 = "World";
let templateLiteral = `${str12} ${str13}`;
console.log(templateLiteral); // Output: Hello World
//git pull check
