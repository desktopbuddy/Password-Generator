// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let passwordLength = prompt("What would you like the length of your password to be?");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be 8 to 128 characters long.")
  } else {
    var hasLowerCase = confirm("Would you like lowercase letters in your password?");
    var hasUpperCase = confirm("Would you like uppercase letters in your password?");
    var hasNumeric = confirm("Would you like numbers in your password?");
    var hasSpecialCharacter = confirm("Would you like special characters in your password?");

    console.log(passwordLength);
    console.log(hasLowerCase);
    console.log(hasUpperCase);
    console.log(hasNumeric);
    console.log(hasSpecialCharacter);
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