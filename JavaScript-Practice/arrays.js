// 1. Array Creation and Basic Properties 
let workouts = ["Push-ups", "Pull-ups", "Squats"];
console.log("Initial Array", workouts);
console.log("Total Workouts", workouts.length);

// 2. Adding & Removing Items (push, pop, unshift, shift)
workouts.push("Plank"); // Akhir mein add
console.log("After push:", workouts);

workouts.pop(); // akhir se remove
console.log("After pop:", workouts);

workouts.unshift("Warm-up"); // shuru mein add
console.log("Afrer unshift:", workouts);

workouts.shift(); // shuru se remove 
console.log("After shift:", workouts);

// 3. Searching in Array (includes & indexOf)
console.log("Has Squats?:", workouts.includes("Squats"));
console.log("Index of Pull-ups:", workouts.indexOf("Pull-ups"));

// 4. slice vs splice
let topTwo = workouts.slice(0, 2); // copy banaye ga (index 0 aur 1)
console.log("Sliced (Copy):", topTwo);
console.log("Original after slice:", workouts); // Original same rahega

workouts.splice(1, 1, "Chin-ups"); // Index 1 se 1 item hata kar chin-ups daalega
console.log("After splice (Modified):", workouts);