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

    // links together the acceptable password types
  varString = alphaLower + alphaUpper +alphaNum + alphaSpec
    
  //acknowledges that at least one member of the string is selected     
  if (alphaString.length > 0) {
    console.log("Character string is" + alphaString);
    return alphaString;
  } else {
    window.alert("select at least one type of character,");
    return alphaSelect();
  }
}

// added set password length
var generatePassword = function() {

  var alphaLength = prompt('Password Length? Enter a number between "8" and "200".');
  alphaLength = parseInt(alphaLength);
  console.log('Character length is' + alphaLength);

  if (isNaN(alphaLength) || alphaLength < 8 || alphaLength > 200) {
    return generatePassword();
  }

  var alphaSet = alphaSelect();
  var retPassword = "";

  for (var i = 0, n = alphaSet.length; i < alphaLength; i++) {
    retPassword += alphaSet[Math.floor(Math.random() * n)];

    return retPassword; 
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
