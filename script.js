// Assignment Code
var generateBtn = document.querySelector("#generate")
var lowercase="abcdefghijklmnopqrstuvwxyz"
var uppercase= lowercase.toUpperCase()
var numner="0123456789"
var special="!@#$%^&*();:,.[{]}=+-_?><"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// 8-128 charaters
//validation lower case
//validation upper case
//validation numeric
//validation special characters

function generatePassword() {
  var finalpassword=""

  var size =prompt("Please enter 8 to 128 characters")
  console.log(size)

  if (size >= 8 && size <= 128) {
      var isLowercase= confirm("include lowercase?")
      console.log(isLowercase)

      var isUppercase= confirm("include uppercase?")
      console.log(isUppercase)

      var isNumber= confirm("include number?")
      console.log(isNumber)

      var isSpecialcharacter= confirm("include special characters?")
      console.log(isSpecialcharacter)
  }

  else  {
    alert("Invalid entry")

  }

      if (isLowercase===true){
        var positionString=Math.floor(Math.random()*26)
        console.log(positionString) 

             
      if(isUppercase===true)
        var positionString=Math.floor(Math.random()*26)
        console.log(positionString)
        
      if(isNumber===true)
        var positionString=Math.floor(Math.random()*10)
        console.log(positionString)
       

      if(isSpecialcharacter===true)
        var positionString=Math.floor(Math.random()*25)
        console.log(positionString)

         finalpassword= finalpassword+ isLowercase[positionString] +isUppercase[positionString]+ isNumber[positionString] + isSpecialcharacter[positionString]


         return finalpassword
        }

 

  
  
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
