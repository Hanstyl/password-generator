var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolList = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"]

var generateBtn = document.querySelector("#generate");
var finalPassword = "";


// prompt for parameters 
function generatePassword() {

  var desiredLength = prompt("How many characters will your password have?");

  if (desiredLength <= 8 || desiredLength >= 128) {
    alert("Password length must be 8 or more characters long. MAX character limit is 128!")

  } else {
    var upperCon = confirm("Will your password use uppercase letters?");
    var lowerCon = confirm("Will your password use lowercase letters?");
    var numberCon = confirm("Will you password use numbers?");
    var symbolCon = confirm("Will you password use special characters?");

    while (!upperCon && !lowerCon && !numberCon && !symbolCon);

    var options = [];

    if (upperCon) {
      //options.push(...upperList);
      options = options.concat(upperList);

    }

    if (lowerCon) {
      //options.push(...lowerList);
      options = options.concat(lowerList);

    }

    if (numberCon) {
      //options.push(...numberList);
      options = options.concat(numberList);

    }

    if (symbolCon) {
      //options.push(...symbolList);
      options = options.concat(symbolList);

    }
  
    for (var i = 0; i < desiredLength; i++) {
      finalPassword = finalPassword + options[Math.floor(Math.random() * options.length)]
    }
    return finalPassword;
  }
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);