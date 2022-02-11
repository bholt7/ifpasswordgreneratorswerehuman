// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var word = prompt("How many characters would you like your password to be ?");
  var char = "234@$#FhgkuoyurtsffHhkhgKlgjfBdgxfxhvJhjshjdckcn[]=gjfgdfhlgfhghrlgh;fhsdfygbhgksdlfdbcfhgdbdcgbvkjdjhv~-jfhdufrjxkkjdhhdnhns";
  var pswdLength = 8-128;
  var pswd = ""


  
  if(word < 8) {
    alert("Password must be between 8-128 characters");

  } else if (word > 128) {
    alert("Password must be between 8-128 characters");

  }
    
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
