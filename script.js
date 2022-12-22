// Assignment code here

function generatePassword() {
    // Create arrays containing available characters from which the password can be generated
    const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
    
    // Using prompt box to ask user for desired length of password
    // Stores user's desired length
    let passwordEntry = window.prompt("How many characters would you like your password to be?");
    console.log("User would like a password length of " + passwordEntry + " characters.");
    // Using an alert box if user's input length doesn't fit requirement
    if (passwordEntry < 8 || passwordEntry > 128) {
        alert ("ERROR! Please enter a password within the allowed password length.");
    } 

    if (passwordEntry >= 8 && passwordEntry <= 128) {
        var allChars = [];
        var generatedPassword = '';
        
        // Using confirm boxes to confirm with user if they would like any of the following criteria including in desired password
        // Confirming to include lower case characters
        // Adding lowerCase array to allChars array
        var lcChars = confirm("If you would like to include lower case letters in your password, click OK");

        if (lcChars == true) {
            console.log("User would like to include lower case letters in password.");
            allChars += lowerCase;
        }
        else {
            console.log("User would not like to include lower case letters in password.");
        }

        // Confirming to include upper case letters
        // Adding upperCase array to allChars array
        var upChars = confirm("If you would like to include upper case letters in your password, click OK");

        if (upChars == true) {
            console.log("User would like to include upper case letters in password.");
            allChars += upperCase;
        }
        else {
            console.log("User would not like to include upper case letters in password.");
        }

        // Confirming to include numbers
        // Adding numbers array to allChars array
        var nums = confirm("If you would like to include numbers in your password, click OK");

        if (nums == true) {
            console.log("User would like to include numbers in password.");
            allChars += numbers;
        }
        else {
            console.log("User would not like to include numbers in password.");
        }

        // Confirming to include special characters
        // Adding specialCharacters array to allChars array
        var specialChars = confirm("If you would like to include special characters in your password, click OK");

        if (specialChars == true) {
            console.log("User would like to include special characters in password.");
            allChars += specialCharacters;
        }
        else {
            console.log("User would not like to include special characters in password.");
        }
        
        // Display all the available characters for password
        console.log("All selected characters: " + allChars);

        // Password generator that randomizes the possible available characters
        generatedPassword = Math.floor(Math.random() * allChars.length);

        console.log("The user's new generated password is: " + generatedPassword + ".");
        
        return generatedPassword;
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
