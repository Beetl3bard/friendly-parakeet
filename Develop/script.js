// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"

function generatePassword() {
  var passwordLength = prompt("how many characters is your password?")
  console.log(passwordLength)
  //ask user for lowercase
  var wantLowerCase = confirm("Do you want lowercase letters?")
  console.log(wantLowerCase);
  //ask user for uppercase
  //ask user numeric
  //ask special characters
  // make a variable combining user choices
  var userChoices= "";
  if (wantLowerCase) {
    userChoices = userChoices + lowerCaseLetters

  }
  //create random password
  return passwordLength
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
