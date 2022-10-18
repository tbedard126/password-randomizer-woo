// Assignment code here


// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// function that creates the random numbers
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  const random = Math.random()
  return Math.floor(min * (1 - random) + random * max)
}



// this is the function that creates the random list
function getRandomItem(list) {
  return list[randomInt(list.length)]
}


//the function for generating the password//


function generatePassword() {
  // asks how many numbers you want in the password//
  const userInput = window.prompt("Perferred password length?")
  // if the input is not a number gives you this alert//
  const passwordLength = parseInt(userInput)
  if (isNaN(passwordLength)) {
    window.alert("Can you not count?")
    return
  }
  // if password is not between 8 and 128 chars get this alert//
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128")
    return
  }
  // windows confirming if you want to add the following lists//
  const numbers = window.confirm("Would you like to use numbers?")
  const uppercase = window.confirm("would you like to use uppercase?")
  const lowercase = window.confirm("Would you like to use lowercase?")
  const specialChars = window.confirm("Would you like to use special characters?")


  // the lists for all of the numbers/symbols/letters chosen for the randomizer//
  const numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  const uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"]

  const options = []

  // if the selection was true then this will push the following arrays//

  if (numbers === true) {
    options.push(numberList)
  }

  if (uppercase === true) {
    options.push(uppercaseList)
  }

  if (lowercase === true) {
    options.push(lowercaseList)
  }

  if (specialChars === true) {
    options.push(symbolList)
  }

  if (specialChars, lowercase, uppercase, numbers !== true) {
    window.alert("must choose at least one")
  }

  let generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    let randomList = getRandomItem(options)
    let randomSym = getRandomItem(randomList)

    generatedPassword += randomSym;
  }
  return generatedPassword
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
