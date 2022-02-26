
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

    var guessSquare = $(".front-row-" + gameRound + "-letter-" + (userGuess.length + 1));
    var answerSquare = $(".back-row-" + gameRound + "-letter-" + (userGuess.length + 1));
    guessSquare.text(letterEntered);
    answerSquare.text(letterEntered);
    userGuess.push(letterEntered);

    animateLetterPressed(guessSquare);

  }

});

// Function to utilise DEL key
$(".del").click(function() {

  var guessSquare = $(".row-" + gameRound + "-letter-" + (userGuess.length + 1));
  guessSquare.text("");
  userGuess.pop();

});

// Function to utilise ENTER key
$(".enter").click(function() {

  if (userGuess.length === 5) {

    if (wordsList.includes(userGuess.join(""))) {

      flipLetters();
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
function checkGuess() {

  var chosenLettersCopy = [...chosenLetters];

  // Turn correct letters green
  for (var i = 0; i < 5; i++) {

    var guessSquare = $(".back-row-" + gameRound + "-letter-" + (i + 1));
    var guessedLetter = userGuess[i];
    var keyPressed = $("#" + guessedLetter);

    if (chosenLettersCopy.includes(guessedLetter) && guessedLetter === chosenLetters[i]) {
      guessSquare.addClass("green");
      keyPressed.addClass("green");
      var letterIndex = chosenLettersCopy.indexOf(guessedLetter);
      chosenLettersCopy.splice(letterIndex, 1);
    }

  }

  // Turn correct letters in wrong place yellow
  for (var i = 0; i < 5; i++) {

    var guessSquare = $(".back-row-" + gameRound + "-letter-" + (i + 1));
    var guessedLetter = userGuess[i];
    var keyPressed = $("#" + guessedLetter);

    if (chosenLettersCopy.includes(guessedLetter) && !guessSquare.hasClass("green")) {
      guessSquare.addClass("yellow");
      if (!keyPressed.hasClass("green")) {
        keyPressed.addClass("yellow");
      }
      var letterIndex = chosenLettersCopy.indexOf(guessedLetter);
      chosenLettersCopy.splice(letterIndex, 1);
    }

  }

  // Turn incorrect letters black
  for (var i = 0; i < 5; i++) {

    var guessSquare = $(".back-row-" + gameRound + "-letter-" + (i + 1));
    var guessedLetter = userGuess[i];
    var keyPressed = $("#" + guessedLetter);

    if (!chosenLettersCopy.includes(guessedLetter) && !guessSquare.hasClass("green") && !guessSquare.hasClass("yellow")) {
      guessSquare.addClass("black");
      if (!keyPressed.hasClass("green")) {
        keyPressed.addClass("black");
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

// Set up flip cards animation
function setAllCards() {

  for (var j = 1; j < 7; j++) {
    for (var i = 1; i < 6; i++) {
      var card = $("#card.row-" + j + "-letter-" + i);
      card.flip({
        axis: "x",
        trigger: "manual",
        speed: 650,
        front: ".front-row-" + j + "-letter-" + i,
        back: ".back-row-" + j + "-letter-" + i,
      });
    }
  }

}

setAllCards();

function flipLetters() {
  for (var i = 1; i < 6; i++) {
    var card = $("#card.row-" + gameRound + "-letter-" + i);
    card.flip(true);
    checkGuess();
  }
};
