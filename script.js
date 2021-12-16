
var generateBtn = document.querySelector("#generate");

var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var numbers  = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];
var confirmLowerCase = "";
var confirmUpperCase = "";
var confirmSpecial = "";
var confirmNumbers ="";
var passwordText=""; 
var count=""; 

// Write password to the #password input
function writePassword() {

let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];
let masterArray = [];

generateBtn.addEventListener("click", writePassword);
function generatePassword () {

let characterCount = prompt("Please choose between 8 characters to 128 characters for your password length.");
  if (!characterCount || characterCount <=7 || characterCount >= 129) {
    return alert ("Please try again and pick a number between 8 to 128.");
}

let useLowerCase = confirm("Click OK if you would like to include lowercases in your password. For example: A B C ");
  if (useLowerCase  === true) {
    masterArray += lowerCase;
  }
  
let useUpperCase = confirm ("Click OK if you would like to include uppercases in your password. For example: a b c");
  if (useUpperCase  === true) {
    masterArray += upperCase; 
  }

let useSpecial = confirm ("Click OK if you would like to include special characters in your password. For example: ! @ #");
  if (useSpecial  === true) {
    masterArray += special; 
  }

let useNumbers = confirm ("Click OK if you would like to include numbers in your password. For example: 1 2 3");
 if (useNumbers  === true) {
  masterArray += numbers; 
}
let randomPassword = "";
for (let i = 0; i < characterCount; i++) {
randomPassword += masterArray[Math.floor(Math.random() * (masterArray.length))];
console.log(Math.floor(Math.random() * (masterArray.length)));
console.log(randomPassword); 
}

return randomPassword; 
}
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
  
}
generateBtn.addEventListener("click", writePassword)
document.getElementById("placeholder")
