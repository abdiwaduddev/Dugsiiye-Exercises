function fullName(first: string, last:string) {
  return first + " " + last;
}
console.log(fullName("Abdiwadud","Hussein"))

const registerUser = (username : string, isAdmin?: boolean, language : string = "en" ) =>{
    return `i am ${username} , ${isAdmin}, ${language}`
}

console.log(registerUser("Abdiwadud"))


function average(...scores: number[]): number {
  return scores.reduce((a, b) => a + b, 0);
}

console.log(average(10, 20, 30)); // ✅

