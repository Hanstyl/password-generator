var generateBtn = document.querySelector("#generate");

var passwordComplexityAttributes ={
  length: '',
  upper: '',
  lower: '',
  numbers: '',
  specials: ''
};


//Prompts the user to select desired password parameters
var promptForAttributes = function() {

  // Ask user if they want lower case letters
  promptForAttributes.lowercase = window.prompt('Would you like to use lower case letters?');


  // Ask if they want upper case letters
  promptForAttributes.lowercase = window.prompt('Would you like to use upper case letters?');


  // Ask desired length of password
  promptForAttributes.lowercase = window.prompt('How long would you like the password to be?');


  // Ask for numbers
  promptForAttributes.lowercase = window.prompt('Would you like to include numbers?');


  // Ask for special characters
  promptForAttributes.lowercase = window.prompt('Would you like to use special characters?');

}










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
