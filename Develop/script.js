// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let passwordLength = prompt("What would you like the length of your password to be?");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be 8 to 128 characters long.")
  } else {
    // Name of lowercase variable
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
