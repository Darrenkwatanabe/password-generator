// Assignment code here

function passwordGenerator() {
    let passwordEntry = prompt("Please enter a password with a length of at least 8 characters and no more than 128 characters.");
    if (passwordEntry < 8 || passwordEntry > 128) {
        alert ("ERROR! Please enter a password within the allowed password length.");
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