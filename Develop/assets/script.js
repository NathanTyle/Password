// Assignment code here

var alphaSelect = function() {

  // added lowercase letters to password
  if (!alphaLower) {
    alphaLower ="";
  } else {
    alphaLower = "abcdefghijklmnopqrstuvwxyz";
  }

  // added uppercase letters to password
  var alphaUpper = confirm('Include upercase characters?');

  if(!alphaUpper) {
    alphaUpper = "";
  } else {
    alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
