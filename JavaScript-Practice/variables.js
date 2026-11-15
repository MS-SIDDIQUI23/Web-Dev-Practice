//Variable banana aur value assign karna
let name = "MS";
let age = 28;
age = 29; // yeh chal jaye ga kyun ke let ki value badal sakte hein
console.log("updated age:", age);
const cityName = "Karachi"
// cityName = "lahore"; // agar ise uncomment kare toh toh Console main red error aayega
const profession = "Developer";

// Console main print karna
console.log(name);
console.log(age);
console.log(cityName);
console.log(profession);

// block scope 
if (true) {
    let secretCode = "285488";
    console.log("Inside Block:", secretCode); //yeh print hoga
}
// Agar aap neeche wali line chalaye ge toh Error aaye ga kyun ke secretCode sirf { } ke andar tha
// console.log("Outside Block:", secretCode);

// function scope 
function myTask() {
    let taskName = "coding";
    console.log(taskName); //yeh chale ga 
}
myTask();
// console.log(taskName); // Error: Fucnction ke bahar access nahi ho sakta

// var Dangerous (Breaking Block scope)
if (true) {
    var oldVariable = "Main bahar bhi dekhunga!";
}
console.log(oldVariable); //yeh print ho jayega (jo ek buri adat hai)

// (Note: Function ke andar var bhi bahar nahi nikalta, sirf if ya for blocks se leak hota hai).