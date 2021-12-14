//original code: var generateBtn = document.querySelector("#generate");
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  // passwordText.value = password;
  //}
  //generateBtn.addEventListener("click", writePassword);

//Prompts needed to be shown:
//1. the user needs a length of at least 8 characters and no more than 128 characters
//2. the user needs lower case
//3. the user needs upper case 
//4. the user needs numbers
//5. the user needs special characters - special characters include: !@#$%^&*()''"

//First step would be create vars for length, lower case, upper case, numbers and special characters?

var alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
var alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); 
var numbers  = '0123456789'.split(''); 
var specialCharacters = '!@#$%^&*()'.split(''); 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
   //return 
