// Assignment Code
var generateBtn = document.querySelector("#generate");

// Added new variables to place in the function

var word;
var chooseNumber ;
var specialCharacter;
var chooseUp;
var chooseLow;


var char = "!@#$%^&*()_+[]".split("");

var ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var abc = "abcdefghijklmnopqrstuvwxyz".split("");

var numeric = "123456789".split("");

var picks;

// Here I had to create a function that will be called on in the function below.

function generatePassword() {
  // Here I am adding a prompt to select how many characters would be in password.

  word = parseInt(prompt("How many characters would you like in your password ?"));

// creating an if statement that contains an alert if the user hits cancel.

  if (!word) {

    alert("Please enter how many characters you would like in your password");

  } else if (word < 8 || word > 128) {

    alert("Password must be between 8-128 characters");

    // create my confirms in the else.

  } else {

    var chooseNumber = confirm("Would you like to include a number in your password ?");
    var specialCharacter = confirm("Would you like to include a special character in your password ?");
    var chooseUp = confirm("Would you like to include uppercase letters ?");
    var chooseLow = confirm("Would you like to include lowercase letters ?");

  };

  // added multiple if else statements to create user variation within password
  
  if (chooseNumber && specialCharacter && chooseUp && chooseLow) {

    picks = char.concat(abc, ABC, numeric);

  } else if (specialCharacter && chooseUp && chooseLow) {

  picks = char.concat(abc, ABC);

  } else if (chooseUp && chooseLow && chooseNumber) {

  picks = abc.concat(ABC, numeric);

  } else if (chooseNumber && specialCharacter && chooseUp) {

    picks = numeric.concat(ABC, char, );

  } else if (chooseLow && specialCharacter && chooseLow) {

    picks = abc.concat(char, numeric);

  } else if (chooseNumber && chooseLow) {

    picks = numeric.concat(abc);

  } else if (chooseUp && chooseLow) {

  picks = ABC.concat(abc);

  } else if(chooseNumber && chooseUp) {

    picks = numeric.concat(ABC);

  } else if (specialCharacter && chooseNumber) {

    picks = char.concat(numeric);

  } else if (specialCharacter && chooseLow) {

    picks = char.concat(abc);

  } else if (chooseUp && specialCharacter) {

    picks = ABC.concat(char);

  } else if (chooseNumber) {

    picks = numeric;

  } else if (chooseUp) {

    picks = ABC;

  } else if (chooseLow) {

    picks = abc;

  } else if (specialCharacter) {

    picks = char;

  };

  var pswrd = "";

  // created my for loop, here i had to use the math.floor(Math.random) method in order for the password to generate random values based on the
  // users choices.
  console.log(picks)

  for(var i = 0; i <= word; i++) {


  pswrd += picks [
    Math.floor(Math.random() * picks.length)
  ];

  }
 console.log(pswrd)
  return pswrd



  
}

 





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Here I had to create a function that will be called on in the function above.

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
