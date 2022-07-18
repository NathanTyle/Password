// Assignment code here

var alphaSelect = function() {

  // added lowercase letters to password
  var alphaLower = confirm('add lowercase letters?');

  if (!alphaLower) {
    alphaLower ="";
  } else {
    alphaLower = "abcdefghijklmnopqrstuvwxyz";
  }

  // added uppercase letters to password
  var alphaUpper = confirm('add upercase letters?');

  if(!alphaUpper) {
    alphaUpper = "";
  } else {
    alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

    // added numbers to the password
  var alphaNum = confirm('add numbers?');

  if (!alphaNum){
    alphaNum = "";
  } else {
    alphaNum = "0123456789";
  }

    // added special characters to password
  var alphaSpec = confirm('add special characters?');

  if (!alphaSpec) {
    alphaSpec ="";
  } else {
    alphaSpec = "!@#$%^&*+";
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
