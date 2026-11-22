interface User {
    readonly id? : number,
    username : string,
    password : string
    email?: string
}

function Login(user : User) {
    console.log(`${user.username}, ${user.password} , ${user.email}`);
}
Login({username : "abdiwaud", password : "12345", email : "abdi@gmail.com"})

const b: User = {
  id: 123-456,
  username: "Kalafoge",
  password : "12345"
};

// b.id = "9999";