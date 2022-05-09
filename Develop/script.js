// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialChar = "!@#$%^&*?=+-_()"

// Write password to the #password input
function generatePassword() {
var passwordSelect = [];
var lowCaseLtr = window.confirm("Would you like lowercase letters?")
var upperCaseLtr = window.confirm("Uppercase letters?")
var numberSelect = window.confirm("Numbers?")
var specialCharQuestion = window.confirm("Special Characters?")
var userPasswordLength =Number(window.prompt("how long do you want your password? 8-126 characters."))

if(lowCaseLtr) {
  window.alert("You have selected lowercase letters!")
  var lwrCaseSplit = letters.split("");
 
  passwordSelect.push(...lwrCaseSplit);
  console.log(lowCaseLtr);
}
console.log(lowCaseLtr);
if(upperCaseLtr) {
  window.alert("You have selected uppercase letters!")
const upperConv = letters.toUpperCase();
var upperConvSplit = upperConv.split("");

passwordSelect.push(...upperConvSplit);
console.log(upperCaseLtr);
}

if(numberSelect) {
  window.alert("You have selected number!")
  var numSplit = numbers.split("");
  passwordSelect.push(...numSplit);
  console.log(numberSelect)
}

if(specialCharQuestion) {
  window.alert("You have selected special characters letters!")
  var specCharSplit = specialChar.split("");
  passwordSelect.push(...specCharSplit);
  console.log(specialCharQuestion)
}
console.log(passwordSelect);


for (let i = 0; i < userPasswordLength; i++) {
  var randomNumber = Math.floor(Math.random()*passwordSelect.length);
  password += passwordSelect.substring(randomNumber, randomNumber +1);
  console.log(randomNumber);
}
  
}





function writePassword() {
  var password = generatePassword();  //password text here
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
