// This is a sample comment to test the theme's comment styling
// It includes multiple lines to check readability

// Variables
const myVariable = 42;
let anotherVariable = "Hello, World!";
var globalVar = true;

// Function definition
function calculateSum(a, b) {
    // Parameters and arithmetic
    const result = a + b;
    return result;
}

// Function call
const sum = calculateSum(10, 20);

// Class definition
class MyClass {
    constructor(name) {
        this.name = name; // Instance variable
    }

    // Method
    greet() {
        return `Hello, ${this.name}!`;
    }
}

// Constants
const PI = 3.14159;
const CONFIG = {
    key: "value",
    enabled: true
};

// Template literal and string
const greeting = `Welcome to ${CONFIG.key}`;

// Arrow function
const multiply = (x, y) => x * y;

// Control flow keywords
if (myVariable > 0) {
    console.log("Positive number");
} else {
    console.log("Non-positive number");
}

// Array and loop
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(`Number: ${num}`);
}

// Object literal
const person = {
    name: "Alice",
    age: 30,
    isActive: true
};

// Sample regex
const regex = /test\d+/;

// Export for module
export default MyClass;