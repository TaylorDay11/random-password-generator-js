let characters = [];

const noSymbolAndNumbersCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const noSymbolsCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const noNumbersCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let noNumbers = false
const noNumbersButton = document.getElementById("no-numbers")
let noSymbols = false
const noSymbolsButton = document.getElementById("no-symbols")
let passwordLength = 15
const generatePasswords = document.getElementById("generate-passwords")
const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")

noNumbersButton.addEventListener("click", function(){
    if(noNumbers === false){
        noNumbers = true
        noNumbersButton.classList.add("selected")
    }else{
        noNumbers = false
        noNumbersButton.classList.remove("selected")
    }
})

noSymbolsButton.addEventListener("click", function(){
    if(noSymbols === false){
        noSymbols = true
        noSymbolsButton.classList.add("selected")
    }else{
        noSymbols = false
        noSymbolsButton.classList.remove("selected")
    }
})

function selectedCharacters(){
    characters = []
    if (noSymbols === false && noNumbers === false){
        characters = allCharacters
    } else if(noSymbols === false && noNumbers === true){
        characters = noNumbersCharacters
    } else if(noSymbols === true && noNumbers === false){
        characters = noSymbolsCharacters
    } else if(noSymbols === true && noNumbers === true){
        characters = noSymbolAndNumbersCharacters
    }
}

function limitCharacters(){
   const limitCharactersValue = document.getElementById("password-length").value
   if(limitCharactersValue === ""){
        passwordLength = 15
    } else if(limitCharactersValue <= 15){
        passwordLength = limitCharactersValue
    }
    else{
        passwordLength = 15
    }
}

generatePasswords.addEventListener("click", function(){
   passwordOne.textContent = ""
   passwordTwo.textContent = ""
   selectedCharacters()
   limitCharacters() 
    for(i = 0; i < passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * characters.length)
        passwordOne.textContent += characters[randomNumber]
    }
    for(i = 0; i < passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * characters.length)
        passwordTwo.textContent += characters[randomNumber]
    }
})

