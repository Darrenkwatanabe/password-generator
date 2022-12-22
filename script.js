// Assignment code here

function generatePw() {
    // Create arrays containing available characters from which the password can be generated
    const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

    let passwordEntry = window.prompt("Please enter a password with a length of at least 8 characters and no more than 128 characters.");
    if (passwordEntry < 8 || passwordEntry > 128) {
        alert ("ERROR! Please enter a password within the allowed password length.");
    } 
    console.log(generatePw);
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
