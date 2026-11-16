// 1. Arithmetic Opration 
let a = 10;
let b = 3;
console.log("Addition:", a + b); // 13 answer 
console.log("Remainder (%):", a % b); // 1 answer
console.log("Power (**):", a ** b); // 1000 answer

// 2. Assignment Operators 
let score = 50;
score += 10; // score = score + 10
console.log("Updated Score:", score); // 60 answer

// 3. Comparison Operators (Strict vs Loose - Interview Favorite)
let numValue = 5;
let strValue = "5";
console.log("Loose Equality (==):", numValue == strValue); // True (sirf value dekhi)
console.log("Strict Equality (===):", numValue === strValue); // false (type bhi dekhi: number vs string)

// 4. Logical Operators 
let hasLaptop = true;
let hasInternet = true;
let isTired = false;

console.log("Can Code (&&):", hasLaptop && hasInternet); // true
console.log("Need Break (!):", !isTired); // true 

// 5. Increment (++) & Decrement (--)
let likes = 10;
likes++; // 10 + 1 = 11
console.log("likes after ++:", likes);
likes--; // 11 - 1 = 10
console.log("Likes after --:", likes);

// 6. Ternary Operators (? :) - Short if-else
let userAge = 20;
let eligibilty = (userAge >= 18) ? "Eligible for license" : "Not Eligible";
console.log("License Status:", eligibilty);

// Ek aur real-world example
let isLoggedIn = true;
let massage = isLoggedIn ? "Welcome Back!" : "Please Log In";
console.log("Dashboard Massage:", massage);