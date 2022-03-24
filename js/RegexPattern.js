// // UC1--first name start with capital letter
// {
//     const regEx = RegExp(/^[A-Z]{1}[A-Za-z]{4,}$/);
//     let result = regEx.test("aftab")
//     console.log("FirstName ===>", result);

// }

// // UC2---password : min 1 letter caps, min 8 chars, min 1 number, min 1 special char,max 15 chars

// {
//     const reg1 = RegExp(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&*]{8,15}$/);
//     let result = reg1.test("afta@34")
//     console.log("Password ===>", result);
// }

// // UC3--- Regex experrision for email

// {
//     const reg2 = RegExp(/^[a-z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,4}$/);
//     let result = reg2.test("alam41976@gmail.com")
//     console.log("EmailId ===>", result);
// }

// // UC4---Regex expression for phone number maximum 10 digit
// {
//     const reg3 = RegExp(/^[6-9]{1}[0-9]{9}$/);
//     let result = reg3.test("797581963")
//     console.log("PhoneNumber ===>", result);
// }