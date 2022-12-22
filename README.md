# password-generator

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| JavaScript    | [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp) | 

## Table of Contents

1. [Description](#description)
2. [Given Starter Code](#given-starter-code)
3. [Usage](#usage)
4. [Learning Points](#learning-points)
5. [Author Info](#author-info)

## Description

[Password Generator](https://darrenkwatanabe.github.io/password-generator/)

For this assignment, we were given the starter code for a password generator and were tasked to prompt the user if they would
like the following criteria in their password:

1. Lower case letters
2. Upper case letters
3. Numbers
4. Special Characters " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

We were to apply the material we had learned here, which included the use of arrays, popup boxes, variables, and functions. We 
had to utilize the prompt boxes to ask user's what to include in their password. If their password didn't fit the requirements,
we used an alert box to notify them to select a password length that fits. Once fulfilled, then we used confirm boxes to confirm
with the user if they wanted to include the criteria mentioned above.

## Given Starter Code 

We were given the following starter code in JavaScript:

``` JavaScript
// Assignment code here


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
``` 

## Usage



## Learning Points



## Author Info

Darren Watanabe
UC Berkeley Coding Bootcamp Student
Email: watanabedarren@yahoo.com
[Github](https://github.com/Darrenkwatanabe)
[LinkedIn](https://www.linkedin.com/in/darren-watanabe-982526253/)