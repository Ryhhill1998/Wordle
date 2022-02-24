
var wordsList = ["UNTIL", "EVENT", "STAIN"];
var chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
var chosenLetters = [chosenWord[0], chosenWord[1], chosenWord[2], chosenWord[3], chosenWord[4]];
var userGuess = [];
var gameRound = 1;

console.log(chosenWord);
console.log(chosenLetters);

// Function to add each letter to guess row as user clicks
$(".letter-key").click(function() {

  var letterEntered = $(this).text();

  var guessSquare = "#row-" + gameRound + " .letter-" + (userGuess.length + 1);
  $(guessSquare).text(letterEntered);
  userGuess.push(letterEntered);

  animateLetter(guessSquare);

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
    checkGuess(userGuess);
    gameRound++;
    userGuess = [];
  }

});

// Function to check user guess against chosen wordsList
function checkGuess(guess) {

  for (var i = 0; i < 5; i++) {

    var guessSquare = "#row-" + gameRound + " .letter-" + (i + 1);
    var guessedLetter = userGuess[i];
    var keyPressed = "#" + guessedLetter;

    if (guessedLetter === chosenLetters[i]) {
      $(guessSquare).addClass("green");
      $(keyPressed).addClass("green");
    } else if (chosenLetters.includes(guessedLetter)) {
      $(guessSquare).addClass("yellow");
      if (!$(keyPressed).hasClass("green")) {
        $(keyPressed).addClass("yellow");
      }
    } else {
      $(guessSquare).addClass("black");
      $(keyPressed).addClass("black");
    }

  }

};

// Animate letter entered
function animateLetter(letter) {

  $(letter).addClass("pressed");

  setTimeout(function() {
    $(letter).removeClass("pressed");
  }, 100);

}
