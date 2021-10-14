var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]






var generateBtn = document.querySelector("#generate");



// prompt for parameters 
function generatePassword() {
  var desiredLength = prompt("How many characters will your password have?");

  if (desiredLength <= 8 || desiredLength >= 128) {
    alert("Password length must be 8 or more characters long. MAX character limit is 128!")
  }

  if (desiredLength >= 8 && desiredLength <= 128) {
    var upper = confirm("Will your password use uppercase letters?");
    var lower = confirm("Will your password use lowercase letters?");
    var number = confirm("Will you password use numbers?");
    var symbol = confirm("Will you password use special characters?");



    // Incase they dont pick at least one option
    while (!upper && !lower && !number && !symbol) {                              // (thought this was cool. Also for my own future reference) In Javascript, the exclamation mark (“!”) symbol, called a “bang,” is the logical “not” operator. Placed in front of a boolean value it will reverse the value, returning the opposite.
      alert("Must select AT LEAST one to generate password!");
      upper = confirm("Will your password use uppercase letters?");
      lower = confirm("Will your password use lowercase letters?");
      number = confirm("Will you password use numbers?");
      symbol = confirm("Will you password use special characters?");
    }
  }
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);