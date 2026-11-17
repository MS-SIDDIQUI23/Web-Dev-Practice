// 1. if - else-if - else (Grading system)
let marks = 55;
if (marks >= 90) {
    console.log("Grade: A+ (Outstanding!)");
} else if (marks >= 80) {
    console.log("Grade: A (Excellent!)");
} else if (marks >= 60) {
    console.log("Grade: B (Good)");
} else {
    console.log("Grade: Fail (Try Again");
}
// 2. Logical Operetors ke sath Condtion (Real-World Login Check)
let isEmailVerified = true;
let isPasswordCorrect = false;
if (isEmailVerified && isPasswordCorrect) {
    console.log("Login Successful! Welcome to Dashboard.");
} else {
    console.log("Access Denied! Please Check Email or Password.");
}
// 3. Switch Statement (Exact Role Matching)
let userRole = "editor";
switch (userRole) {
    case "admin":
        console.log("Full Access: You can edit, delete, and manage user.");
        break;
    case "editor":
        console.log("Limited Access: You can create and edit post.");
        break;
    case "viewer":
        console.log("Read-only Access: You can only read content.");
        break;
    default:
        console.log("Invalid Role!");
}