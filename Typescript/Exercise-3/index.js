"use strict";
function fullName(first, last) {
    return first + " " + last;
}
console.log(fullName("Abdiwadud", "Hussein"));
const registerUser = (username, isAdmin, language = "en") => {
    return `i am ${username} , ${isAdmin}, ${language}`;
};
console.log(registerUser("Abdiwadud"));
function average(...scores) {
    return scores.reduce((a, b) => a + b, 0);
}
console.log(average(10, 20, 30)); // ✅
