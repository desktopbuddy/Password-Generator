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

    var bank = [];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*"];

    if (hasLowerCase) {
      bank = bank.concat(lowerCase);
    }

    if (hasUpperCase) {
      bank = bank.concat(upperCase);
    }

    if (hasNumeric) {
      bank = bank.concat(numeric);
    }

    if (hasSpecialCharacter) {
      bank = bank.concat(specialCharacter);
    }

    console.log(bank);

    var password = "";

    for (i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * (bank.length));

      bank[randomIndex];
      password = password + bank[randomIndex];
    }

    return password;
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