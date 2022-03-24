

var regex = require('./Pattern').nameRegex;
var reg1 = require('./Pattern').passwordRegex;
var reg2 = require('./Pattern').emailRegex;
var reg3 = require('./Pattern').phoneRegEX;


let nameRegex = regex.test("Aftab")
console.log("nameRegex: ", nameRegex);

let passwordRegex = reg1.test("Aftab@123")
console.log("passwordRegex: ", passwordRegex);

let emailRegex = reg2.test("alam41976@gmail.com")
console.log("emailRegex: ", emailRegex);

let phoneRegEx = reg3.test("7975819623")
console.log("phoneRegEx: ", phoneRegEx);