var result = require("./Pattern");
console.log(result);

let regex1 = result.nameRegex.test("Aftab");
console.log("First Name: ", regex1);

let regex2 = result.passwordRegex.test("Aftab@12");
console.log("Pasword: ", regex2);

let regex3 = result.emailRegex.test("alam41976@gmail.com");
console.log("Email: ", regex3);

let regex4 = result.phoneRegEX.test("7975819623");
console.log("Phone Number: ", regex4);
