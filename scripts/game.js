
var wordsList = ["UNTIL", "EVENT", "STAIN"];
var chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
var chosenLetters = [chosenWord[0], chosenWord[1], chosenWord[2], chosenWord[3], chosenWord[4]];
var userGuess = [];
var gameRound = 1;
var gameOn = true;

console.log(chosenWord);

// Function to add each letter to guess row as user clicks
$(".letter-key").click(function() {

  if (gameOn) {

    var letterEntered = $(this).text();

    var guessSquare = "#row-" + gameRound + " .letter-" + (userGuess.length + 1);
    $(guessSquare).text(letterEntered);
    userGuess.push(letterEntered);

    animateLetterPressed(guessSquare);

  }

});

// Function to utilise DEL key
$(".del").click(function() {

  var guessSquare = "#row-" + gameRound + " .letter-" + (userGuess.length);
  $(guessSquare).text("");
  userGuess.pop();

});

// Function to utilise ENTER key
$(".enter").click(function() {

  if (userGuess.length === 5) {

    if (wordsList.includes(userGuess.join(""))) {

      checkGuess(userGuess);
      gameRound++;

      if (gameRound === 7) {
        gameOn = false;
      } else if (userGuess.join("") === chosenWord) {
        // Animate tiles to jump
        gameOn = false;
      }

      if (gameOn) {
        userGuess = [];
      }

    }
    
  }

});

// Function to check user guess against chosen wordsList
function checkGuess(guess) {

  var chosenLettersCopy = [...chosenLetters];

  // Turn correct letters green
  for (var i = 0; i < 5; i++) {

    var guessSquare = "#row-" + gameRound + " .letter-" + (i + 1);
    var guessedLetter = userGuess[i];
    var keyPressed = "#" + guessedLetter;

    if (chosenLettersCopy.includes(guessedLetter) && guessedLetter === chosenLetters[i]) {
      $(guessSquare).addClass("green");
      $(keyPressed).addClass("green");
      var letterIndex = chosenLettersCopy.indexOf(guessedLetter);
      chosenLettersCopy.splice(letterIndex, 1);
    }

  }

  // Turn correct letters in wrong place yellow
  for (var i = 0; i < 5; i++) {

    var guessSquare = "#row-" + gameRound + " .letter-" + (i + 1);
    var guessedLetter = userGuess[i];
    var keyPressed = "#" + guessedLetter;

    if (chosenLettersCopy.includes(guessedLetter) && !$(guessSquare).hasClass("green")) {
      $(guessSquare).addClass("yellow");
      if (!$(keyPressed).hasClass("green")) {
        $(keyPressed).addClass("yellow");
      }
      var letterIndex = chosenLettersCopy.indexOf(guessedLetter);
      chosenLettersCopy.splice(letterIndex, 1);
    }

  }

  // Turn incorrect letters black
  for (var i = 0; i < 5; i++) {

    var guessSquare = "#row-" + gameRound + " .letter-" + (i + 1);
    var guessedLetter = userGuess[i];
    var keyPressed = "#" + guessedLetter;

    if (!chosenLettersCopy.includes(guessedLetter) && !$(guessSquare).hasClass("green") && !$(guessSquare).hasClass("yellow")) {
      $(guessSquare).addClass("black");
      if (!$(keyPressed).hasClass("green")) {
        $(keyPressed).addClass("black");
      }
    }

  }

};

// Animate letter entered
function animateLetterPressed(letter) {

  $(letter).addClass("pressed");

  setTimeout(function() {
    $(letter).removeClass("pressed");
  }, 100);

};
