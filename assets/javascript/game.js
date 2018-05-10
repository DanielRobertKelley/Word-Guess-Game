alert("Are you ready to play hangman!")
alert("Press any key to start")

var newGameButton = document.getElementById("new-game-button");
var placehoders = document.getElementById("placeholder");
var letterGuessed = document.getElementById("letterGuessed");
var guessesRemaining = document.getElementById("guessesRemaining");
var wins = document.getElementById("wins");
var loses = document.getElementById("loses");
var pickWorded = document.getElementById("currentWord");

var words = ["football", "basketball", "baseball", "hockey", "soccer"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersGuessed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var remainingGuesses = 9;
var wins = 0;
var loses = 0;
var gameRunning = false;
var pickedWord = "";
var pickedWordPlace = [];
var placeholder = [];



function newGame() {
    gameRunning = true;
    remainingGuesses = 9;
    letters = [];
    lettersGuessed = [];
    pickWordPlace = [];
    console.log("event")
    pickedWord = words[Math.floor(Math.random() * words.length)];

    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === "   ") {
            pickedWordPlace.push("    ");
        } else {
            pickedWordPlace.push("_");
        }
    }


    $guessesRemaining.textcontent = guessRemaining--;
    $placeholder.textContent = pickedWord.join("");
    $lettersGuessed.textContent = lettersGuessed;
}

function lettersGuessed(letters) {
    if (gameRunning === true && lettersGuessed.indexOf(letters) === -1) {

        guessedLetters.push(letters);

        for (var i = 0; i < pickedWord; i++) {
            if (pickedWord[i].toLowerCase() === letters.toLowerCase()) {
                pickWordPlace[i] = pickedWord[i];
            }
        }
        placeholder.textcontent = pickedWordPlace.join("");
    }
    else {
        if (!gameRunning) {
            alert("Game hasnt started, click on new game to start.");
        }
        else {
            alert("lettered already guessed");
        }
    }
}
function checkLetters(lettersGuessed) {
    for (var j = 0; j < pickedWord.length; j++) {
        if (lettersGuessed[j] == pickedWord) {
            guessesRemaining === -1;
        }
        else {
            guessesRemaing ===0;
        }
    }
}

function checkWin(pickedWord) {
    while (remainingGuesses > 0 && length != lettersGuessed) {
        if (guessRemaining == 0) {
            alert("Game Over, answer was" + pickedWord);
        }
    }
    document.onkeyup = function (event) {
        console.log(event)
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            lettersGuessed[event.key];
        }
    }
    newGameButton.addEventListener("click", newGame)
}