// 1. Basic Function Declaration (Bina Input ke)
function greetUser() {
    console.log("Welcome to JavaScript Functions!");
}
greetUser(); // Function Call karna zaroori hai

// 2. Parameters & Arguments (Input ke sath)
function welcomeMember(memberName, planType) {
    console.log("Hello " + memberName + "! Your active plan is: " + planType);
}
welcomeMember("MS", "Pro Yearly");
welcomeMember("Noman", "Basic Monthly");

// 3. return Keyword (Calculation kar ke Result wapis lena)
function calculateTotalCalories(proteinGrams, carbsGrams) {
    let total = (proteinGrams * 4) + (carbsGrams * 4);
    return total; // Yeh value bahar bhej dega
}
let mealCalories = calculateTotalCalories(30, 50);
console.log("Total Meal Calories:", mealCalories);

// 4. Arrow Function (=>) - Modern ES6 Way
const calculateBMI = (weightKG, heightMeters) => {
    let bmi = weightKG / (heightMeters * heightMeters);
    return bmi.toFixed(1); // sirf 1 Decimal point tak round kare ga
};
console.log("Calculate BMI:", calculateBMI(55, 1.78));

// 5. Default Parameters (Agar value na di jaye toh default chalegi)
function greetGuest(guestName = "Guest") {
    console.log("Welcome,", guestName);
}
greetGuest("MS"); // Output: Welcome, MS 
greetGuest(); // Output: Welcome, Guest

// 6. Short Arrow Function (Implicit Return - 1 Line)
const squareNumber = (num) => num * num;
console.log("Square of 5:", squareNumber(5));

// 7. Callback Functions (Function ke andar Function)
function processWorkout(exerciseName, callback) {
    console.log("Starting:", exerciseName);
    callback(); // Doosra function yahan chalega
}
function workoutComplete() {
    console.log("Set finished! take 60 second rest.");
}
processWorkout("Pull-ups", workoutComplete);