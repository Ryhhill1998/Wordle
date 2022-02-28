
var wordsList = ["UNTIL", "EVENT", "STAIN", "ABUSE", "ADULT", "AGENT", "ANGER", "APPLE", "AWARD", "BASIS", "BEACH", "BIRTH", "BLOCK", "BLOOD", "BOARD", "BRAIN", "BREAD", "BREAK", "BROWN", "BUYER", "CAUSE", "CHAIN", "CHAIR", "CHEST", "CHIEF", "CHILD", "CLAIM", "CLASS", "CLOCK", "COACH", "COAST", "COURT", "COVER", "CREAM", "CRIME", "CROSS", "CROWD", "CROWN", "CYCLE", "DANCE", "DEATH", "DEPTH", "DOUBT", "DRAFT", "DRAMA", "DREAM", "DRESS", "DRINK", "DRIVE", "EARTH", "ENEMY", "ENTRY", "ERROR", "EVENT", "FAITH", "FAULT", "FIELD", "FIGHT", "FINAL", "FLOOR", "FOCUS", "FRAME", "FRANK", "FRONT", "FRUIT", "GLASS", "GRANT", "GRASS", "GREEN", "GROUP", "GUIDE", "HEART", "HORSE", "HOTEL", "HOUSE", "IMAGE", "INDEX", "INPUT", "ISSUE", "JAPAN", "JUDGE", "KNIFE", "LAYER", "LEVEL", "LIGHT", "LIMIT", "LUNCH", "MAJOR", "MARCH", "MATCH", "METAL", "MODEL", "MONEY", "MONTH", "MOTOR", "MOUTH", "MUSIC", "NIGHT", "NOISE", "NORTH", "NOVEL", "NURSE", "OFFER", "ORDER", "OTHER", "OWNER", "PANEL", "PAPER", "PARTY", "PEACE", "PHASE", "PHONE", "PIECE", "PILOT", "PITCH", "PLACE", "PLANE", "PLANT", "PLATE", "POINT", "POUND", "POWER", "PRESS", "PRICE", "PRIDE", "PRIZE", "PROOF", "QUEEN", "RADIO", "RANGE", "RATIO", "REPLY", "RIGHT", "RIVER", "ROUND", "ROUTE", "RUGBY", "SCALE", "SCENE", "SCOPE", "SCORE", "SENSE", "SHAPE", "SHARE", "SHEEP", "SHEET", "SHIFT", "SHIRT", "SHOCK", "SIGHT", "SKILL", "SLEEP", "SMILE", "SMITH", "SMOKE", "SOUND", "SOUTH", "SPACE", "SPEED", "SPITE", "SPORT", "SQUAD", "STAFF", "STAGE", "START", "STATE", "START", "STEAM", "STEEL", "STOCK", "STONE", "STORE", "STUDY", "STUFF", "STYLE", "SUGAR", "TABLE", "TASTE", "THEME", "THING", "TITLE", "TOTAL", "TOUCH", "TOWER", "TRACK", "TRADE", "TRAIN", "TREND", "TRIAL", "TRUST", "TRUTH", "UNION", "UNITY", "VALUE", "VIDEO", "VISIT", "VOICE", "WASTE", "WATCH", "WATER", "WHILE", "WHITE", "WHOLE", "WOMAN", "WORLD", "YOUTH", "OUGHT", "THERE", "WHERE", "WHICH", "WHOSE", "YOURS", "ADMIT", "ADOPT", "AGREE", "ALLOW", "ALTER", "APPLY", "ARGUE", "ARISE", "AVOID", "BEGIN", "BLAME", "BREAK", "BRING", "BUILD", "BURST", "CARRY", "CATCH", "CAUSE", "CHECK", "CLAIM", "CLEAN", "CLEAR", "CLIMB", "CLOSE", "COUNT", "COVER", "CROSS", "DANCE", "DOUBT", "DRINK", "DRIVE", "ENJOY", "ENTER", "EXIST", "FIGHT", "FOCUS", "FORCE", "GUESS", "IMPLY", "ISSUE", "LAUGH", "LEARN", "LEAVE", "LIMIT", "MARRY", "OCCUR", "OFFER", "ORDER", "PHONE", "PLACE", "POINT", "PRESS", "PROVE", "RAISE", "REACH", "REFER", "RELAX", "SERVE", "SHALL", "SHARE", "SHIFT", "SHOOT", "SOLVE", "SOUND", "SPEAK", "SPEND", "SPLIT", "STAND", "STICK", "STUDY", "TEACH", "THANK", "THINK", "THROW", "TOUCH", "TREAT", "TRUST", "VISIT", "VOICE", "WASTE", "WORRY", "WATCH", "WOULD", "WRITE", "TEARS", "ABOVE", "ACUTE", "ALIVE", "ALONE", "ANGRY", "AWARE", "AWFUL", "BASIC", "BLACK", "BLIND", "BRAVE", "BRIEF", "BROAD", "CHEAP", "CIVIL", "CLEAN", "CLEAR", "CLOSE", "CRAZY", "DAILY", "DIRTY", "EARLY", "EMPTY", "EQUAL", "EAXCT", "EXTRA", "FAINT", "FALSE", "FAITH", "FIFTH", "FINAL", "FIRST", "FRESH", "FRONT", "FUNNY", "GIANT", "GRAND", "GREAT", "GREEN", "GROSS", "HAPPY", "HARSH", "HEAVY", "HUMAN", "IDEAL", "INNER", "JOINT", "LARGE", "LEGAL", "LEVER", "LIGHT", "LOCAL", "LOOSE", "LUCKY", "MAGIC", "MAJOR", "MINOR", "MORAL", "NAKED", "NASTY", "NAVAL", "OUTER", "PLAIN", "PRIME", "PRIOR", "PROUD", "QUICK", "QUIET", "RAPID", "READY", "RIGHT", "ROUGH", "ROUND", "ROYAL", "RURAL", "SHARP", "SHEER", "SHORT", "SILLY", "SIXTH", "SMALL", "SMART", "SOLID", "SORRY", "SPARE", "STEEP", "STILL", "SUPER", "SWEET", "THICK", "THIRD", "TIGHT", "TOTAL", "TOUGH", "UPPER", "UPSET", "URBAN", "USUAL", "VAGUE", "VALID", "VITAL", "WRONG", "YOUNG", "CHEER", "FOUND", "ALIGN", "SKULL", "TRICK"];

var uniqueList = [...new Set(wordsList)].sort();
var finalWordsList = [];

for (var i = 0; i < uniqueList.length; i++) {
  var word = uniqueList[i];
  finalWordsList.push(word);
}

var chosenWord = finalWordsList[Math.floor(Math.random() * finalWordsList.length)];
var chosenLetters = chosenWord.split("");
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

    animateLetterPressed($(".row-" + gameRound + "-letter-" + (userGuess.length)));

  }

});

// Function to utilise DEL key
$(".del").click(function() {

  if (userGuess.length > 0) {
    var guessSquare = $(".front-row-" + gameRound + "-letter-" + (userGuess.length));
    var answerSquare = $(".back-row-" + gameRound + "-letter-" + (userGuess.length));
    guessSquare.text("");
    answerSquare.text("");
    userGuess.pop();
  }

});

// Function to utilise ENTER key
$(".enter").click(function() {

  if (userGuess.length === 5) {

    if (wordsList.includes(userGuess.join(""))) {
      flipLetters();
      gameRound++;
      if (gameRound === 7 && userGuess.join("") != chosenWord) {
        gameLost();
        $("#feedback").html("<strong>" + chosenWord + "</strong>");
        $("#feedback").animate({opacity: 1});
        gameOn = false;
      } else if (userGuess.join("") === chosenWord) {
        // Animate tiles to jump
        $("#feedback").html("<strong>Nice one!</strong>");
        $("#feedback").animate({opacity: 1});
        gameOn = false;
      }
      if (gameOn) {
        userGuess = [];
      }

    } else {
      $("#feedback").html("<strong>Not in word list</strong>");
      $("#feedback").animate({opacity: 1}).delay(1000).animate({opacity: 0});
    }

  } else {
    $("#feedback").html("<strong>Not enough letters</strong>");
    $("#feedback").animate({opacity: 1}).delay(1000).animate({opacity: 0});
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
      if (keyPressed.hasClass("yellow")) {
        keyPressed.removeClass("yellow");
      }
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
      if (!keyPressed.hasClass("green") && !keyPressed.hasClass("yellow")) {
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

// lost game function
function gameLost() {

  for (var i = 1; i < 7; i++) {
    $(".back-row-6-letter-" + i).addClass("end-game");
  }

}
