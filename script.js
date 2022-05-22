// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*();:,.[{]}=+-_?><";
var haveLowercase = lowercase.split("");
var haveUppercase = uppercase.split("");
var haveNumber = number.split("");
var haveSpecial = special.split("");

// Write password to the #password input

// 8-128 charaters
//validation lower case
//validation upper case
//validation numeric
//validation special characters

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  var finalpassword = "";
  var allCarr = [];
  var size = prompt("Please enter 8 to 128 characters");

  // console.log(size);
  // size =parseInt(size)

  if (size < 8 || size > 128) {
    alert("invalid entry!");
  } else {
    if (confirm("include lowercase?")) {
      Array.prototype.push.apply(allCarr, haveLowercase);
    }

    if (confirm("include uppercae?")) {
      Array.prototype.push.apply(allCarr, haveUppercase);
    }

    if (confirm("include number?")) {
      Array.prototype.push.apply(allCarr, haveNumber);
    }

    if (confirm("include Special Characrter?")) {
      Array.prototype.push.apply(allCarr, haveSpecial);
    }

    if (allCarr.length === 0) {
      alert("You must select at lease one ");
    } else {
      for (var i = 0; i < size; i++) {
        var random = Math.floor(Math.random() * allCarr.length);
        finalpassword += allCarr[random];
      }
    }
  }
  // console.log(allCarr);
  document.getElementById("password").innerHTML = finalpassword;
  console.log(finalpassword)
}

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
// if(confirm("include lowercase?")){
//   Array.prototype.push.apply(allCarr, haveLowercase)

// var isLowercase = confirm("include lowercase?");
// console.log(isLowercase);

// var isUppercase = confirm("include uppercase?");
// console.log(isUppercase);

// var isNumber = confirm("include number?");
// console.log(isNumber);

// var isSpecialcharacter = confirm("include special characters?");
// console.log(isSpecialcharacter);

// } else {
//   alert("Invalid entry");
// return ""

// var chosenCharacter = ""
// chosenCharacter [""]

// if (isLowercase === true) {
//   var positionString = Math.floor(Math.random() * 26);
//   console.log(positionString);}

//   if (isUppercase === true){
//     var positionString = Math.floor(Math.random() * 26);
//   console.log(positionString);}

//   if (isNumber === true) {var positionString = Math.floor(Math.random() * 10);
//   console.log(positionString);}

//   if (isSpecialcharacter === true){
//     var positionString = Math.floor(Math.random() * 25);
//   console.log(positionString);}

// var chosenCharacter = ""

// finalpassword =
//   finalpassword +
//   isLowercase[positionString] +
//   isUppercase[positionString] +
//   isNumber[positionString] +
//   isSpecialcharacter[positionString];

//   return finalpassword;

// chosenCharacter = ("isLowercase[positionString]" + "isUppercase[positionString]" + "isNumber[positionString]" + "isSpecial[positionString]")

//  for (var i=0; i < chosenCharacter; i++)

// for (var i=0; i < size; i++) {
// finalpassword= finalpassword+ isLowercase[positionString] +isUppercase[positionString]+ isNumber[positionString] + isSpecialcharacter[positionString] }

// finalpassword =
// chosenCharacter +
// isLowercase[positionString] +
// isUppercase[positionString] +
// isNumber[positionString] +
// isSpecialcharacter[positionString];

// finalpassword = chosenCharacter
