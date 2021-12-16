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

//length ??
// things needed to consider such as a return ? 

//First step would be create vars for length, lower case, upper case, numbers and special characters?

var alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
var alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); 
var numbers  = '0123456789'.split(''); 
var specialCharacters = '!#$%&()*+,-./:";<=>?@[\]^_`{|}~'.split(''); 
var characterLength = 0;

var upperCase = "";
var lowerCase = "";
var upperCase = "";
var special = "";
var numberLength ="";
var characterCount = "";
var passwordText=""; 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  characterCount = prompt ("Please choose between 8 characters to 128 characters for your password length.");

  lowerCase = confirm ("Click OK if you would like to include lowercases in your password. For example: A B C ");

  upperCase = confirm ("Click OK if you would like to include uppercases in your password. For example: a b c");

  special = confirm ("Click OK if you would like to include special characters in your password. For example: ! @ #");

  numberLength = confirm ("Click OK if you would like to include numbers in your password. For example: 1 2 3");

function generatePassword () {
  if (!characterCount || characterCount <=7 || characterCount >= 129) {
    return alert ("Please try again and pick a number between 8 to 128.");
  }
}

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


