const caloriesLog = [300, 450, 200, 600, 350];

// 1. .forEach() - Har item par sirf  kaam karna (No new array)
console.log("--- 1. forEach ---");
caloriesLog.forEach((cal, index) => {
console.log("Meal " + (index + 1) + ": " + cal + " kcal");
});

// 2. .map() - Har item ko transform kar ke NAYA array banana
console.log("--- 2. map ---");
const doubledCalories = caloriesLog.map((cal) => cal * 2);
console.log("Double calories (New Array):", doubledCalories);

// 3. .filter() - Condition ke mutabiq items chhan kar NAYA array banana
console.log("--- 3. filter ---");
const heavyMeals = caloriesLog.filter((cal) => cal >= 400);
console.log("Heavy Meal (>= 400):", heavyMeals);

// 4. .reduce() - Saari values ki jama kar ke AIK single result banayega
console.log("--- 4. reduce ---");
const totalCalories = caloriesLog.reduce((accumulator, currentVal) => {
return accumulator + currentVal;
}, 0); // 0 starting value hai
console.log("Total Daily Calories:", totalCalories);