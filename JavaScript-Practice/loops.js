// 1. for loop (1 to 5 counting)
console.log("--- For Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration Number:", i);
}
// 2. While loop (Countdown example)
console.log("--- While Loop ---");
let battery = 3;
while (battery > 0) {
    console.log("Phone Running... Battery:", battery);
    battery--; // Zaroori hai warna infinite loop ban jayega!
}
// 3. do...while loop (Kam se kam 1 baar zaroor chale ga)
console.log("--- Do-While Loop ---");
let attempts = 5;
do {
    console.log("Attempts executed:", attempts);
    attempts++;
} while (attempts < 3); // Condition false hai (5 < 3) phir bhi 1 baar chala!

// 4. Array par loop chalana (Real-World Use Case)
console.log("--- Array Loop ---");
let exercises = ["Push-ups", "Pull-ups", "Squats", "Plank"];
for (let i = 0; i < exercises.length; i++) {
    console.log("Workout:", exercises[i]);
}
// 5. Break and Continue
console.log("--- Break and Continue ---");
for (let num = 1; num <= 5; num++) {
    if (num === 3) {
        continue; // 3 ko skip kar dega
    }
    if (num === 5) {
        break; // 5 par loop khatam kar dega
    }
    console.log("Number:", num); // sirf 1, 2, 4 print hoga
}