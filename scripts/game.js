
var wordList = ["abbey", "abhor", "abide", "abode", "abort", "about", "above", "abuse", "abyss", "aches", "acids", "acorn", "acres", "acrid", "acted", "actor", "acute", "adage", "adapt", "added", "adder", "adept", "admin", "admit", "adopt", "adore", "adorn", "adult", "aeons", "after", "again", "agent", "agile", "aging", "agony", "agree", "ahead", "aided", "aimed", "aired", "aisle", "alarm", "album", "alert", "algae", "alias", "alibi", "alien", "align", "alike", "alive", "alley", "allow", "alloy", "alone", "along", "aloof", "aloud", "alpha", "altar", "alter", "amass", "amaze", "amber", "amend", "amity", "among", "ample", "amuse", "angel", "anger", "angle", "angry", "angst", "ankle", "annoy", "antic", "antsy", "anvil", "aorta", "apart", "aphid", "apple", "apply", "apron", "arena", "argon", "argue", "arise", "armed", "armor", "aroma", "arose", "array", "arrow", "arson", "ashes", "aside", "asked", "askew", "assay", "asset", "atlas", "atoms", "atone", "attic", "audio", "audit", "aught", "aunty", "aural", "auras", "avert", "avian", "avoid", "await", "awake", "award", "aware", "awash", "awful", "awoke", "axial", "bacon", "badge", "badly", "bagel", "baggy", "baked", "baker", "bakes", "balls", "banal", "bands", "banjo", "banks", "barge", "baron", "based", "bases", "basic", "basil", "basin", "basis", "batch", "bathe", "baton", "beach", "beady", "beans", "beard", "bears", "beast", "beefy", "beers", "began", "begin", "begun", "beige", "being", "belch", "belly", "below", "belts", "bench", "bends", "bendy", "beret", "berry", "bevel", "bible", "bicep", "bidet", "bigot", "biker", "binge", "bingo", "biome", "birch", "birds", "birth", "bison", "black", "blade", "blame", "bland", "blank", "blare", "blast", "blaze", "bleak", "bleed", "bleep", "blend", "bless", "blimp", "blind", "bling", "blink", "bliss", "blitz", "bloat", "blobs", "block", "bloke", "blood", "bloom", "blown", "blows", "blues", "bluff", "blunt", "blurb", "blurt", "blush", "board", "boast", "boats", "bodes", "bogey", "bogus", "boils", "bolts", "bombs", "bonds", "bones", "bongo", "books", "boost", "booth", "boots", "booze", "bored", "boron", "botch", "bound", "bowel", "bowls", "boxed", "boxer", "boxes", "brace", "braid", "brain", "brake", "brand", "brass", "brave", "bravo", "brawl", "brawn", "bread", "break", "breed", "briar", "bribe", "brick", "brief", "brine", "bring", "brink", "brisk", "broad", "broil", "broke", "broom", "broth", "brown", "brunt", "brush", "brute", "budge", "bugle", "build", "built", "bulbs", "bulge", "bulks", "bulky", "bulls", "bully", "bumps", "bumpy", "bunch", "bunny", "buoys", "burly", "burnt", "burps", "burst", "buses", "bushy", "buyer", "bytes", "cabin", "cable", "cacao", "cache", "caddy", "cadet", "cages", "caged", "cairn", "caked", "cakes", "camel", "cameo", "canal", "candy", "canes", "canoe", "canon", "caper", "carat", "cards", "carer", "cargo", "carry", "carve", "cased", "cases", "caste", "catch", "cater", "cause", "caves", "cease", "cello", "cells", "cents", "chafe", "chain", "chair", "chalk", "chant", "chaos", "charm", "chart", "chase", "cheap", "cheat", "check", "cheek", "cheer", "chefs", "chess", "chest", "chewy", "chick", "chief", "child", "chime", "chimp", "china", "chips", "chirp", "chive", "chock", "choir", "choke", "chomp", "chops", "chord", "chore", "chose", "chuck", "chunk", "churn", "chute", "cider", "cigar", "civil", "claim", "clamp", "clash", "clasp", "class", "claws", "clean", "clear", "clerk", "click", "cliff", "climb", "cloak", "clock", "clogs", "clone", "close", "cloth", "clots", "cloud", "clout", "clove", "clown", "clubs", "cluck", "clued", "clues", "clump", "coach", "coast", "coats", "cobra", "cocoa", "coded", "codes", "codex", "codon", "coils", "coins", "colds", "colon", "comet", "comic", "comma", "cones", "coped", "copes", "coral", "cores", "corks", "cough", "could", "count", "court", "coven", "cover", "coves", "cower", "crabs", "crack", "craft", "cramp", "crane", "crank", "crash", "crate", "crave", "crawl", "craze", "crazy", "creak", "cream", "creed", "creep", "creek", "crept", "cress", "crest", "cried", "crime", "crimp", "crisp", "croak", "crook", "crops", "cross", "crowd", "crown", "crows", "crude", "cruel", "crush", "crust", "crypt", "cubed", "cubes", "cubic", "cuffs", "cults", "cumin", "cured", "cures", "curls", "curly", "curry", "curse", "curve", "curvy", "cycle", "cynic", "cysts", "daily", "dairy", "daisy", "dales", "damns", "dance", "dandy", "dared", "dares", "darts", "dated", "dates", "daunt", "dawns", "dazed", "deals", "dealt", "death", "debit", "debts", "debug", "decay", "decks", "decor", "decoy", "deeds", "defer", "delay", "delve", "demon", "demos", "denim", "dense", "dents", "depot", "depth", "derby", "desks", "deter", "detox", "deuce", "devil", "dials", "diary", "diced", "diets", "digit", "dimly", "diner", "diode", "dirty", "disco", "discs", "ditch", "ditto", "diver", "dizzy", "docks", "dodge", "dodgy", "dogma", "doing", "dolls", "donor", "doors", "doped", "dopey", "dosed", "doses", "doubt", "dough", "doves", "dozed", "dozen", "draft", "drain", "drama", "drank", "drawn", "draws", "dread", "dream", "dress", "dried", "dries", "drift", "drill", "drink", "drips", "drive", "droid", "drone", "drool", "droop", "drops", "drove", "drown", "drugs", "druid", "drums", "drunk", "dryly", "duals", "ducks", "ducts", "duels", "duets", "dunes", "dusty", "dutch", "duvet", "dwarf", "dwell", "dying", "eager", "eagle", "early", "earns", "earth", "eased", "easel", "eaten", "ebony", "echos", "edged", "edges", "eerie", "eight", "eject", "elbow", "elder", "elect", "elite", "elope", "elude", "elves", "email", "embed", "ember", "emits", "emote", "empty", "enact", "ended", "endow", "enemy", "enjoy", "enrol", "ensue", "enter", "entry", "equal", "equip", "erase", "erect", "ergot", "erode", "erred", "error", "erupt", "essay", "ether", "ethic", "ethos", "evade", "evens", "event", "every", "evict", "exact", "exalt", "exams", "excel", "exert", "exile", "exist", "exits", "expel", "extra", "exude", "exult", "eyrie", "fable", "faced", "faces", "facet", "facts", "faded", "fades", "faint", "fairy", "faith", "faked", "fakes", "falls", "famed", "fancy", "fangs", "farce", "fared", "farms", "fatal", "fault", "fauna", "fazed", "fears", "feast", "fecal", "feces", "feign", "feint", "femur", "fence", "feral", "ferry", "fetch", "feuds", "fever", "fewer", "fibre", "field", "fiend", "fiery", "fifth", "fifty", "fight", "files", "films", "filth", "final", "finds", "fined", "fines", "fired", "fires", "firms", "first", "fishy", "fists", "fixed", "fixer", "fizzy", "flack","flags", "flail", "flair", "flake", "flaky", "flame", "flank", "flare", "flash", "flask", "flaws", "fleas", "flees", "fleet", "flesh", "flick", "fling", "float", "flood", "floor", "flour", "flown", "fluid", "focal", "focus", "folks", "fonts", "force", "forth", "forty", "forum", "found", "frank", "frame", "fraud", "fresh", "fried", "front", "frost", "fruit", "fuels", "fully", "funds", "funny", "gains", "games", "gamma", "gases", "gates", "gauge", "gears", "genes", "genre", "ghost", "giant","gifts", "girls", "given", "gives", "gland", "glass", "globe", "glory", "gloss", "glove", "glued", "goals", "goats", "going", "goods", "grace", "grade", "grain", "grams", "grand", "grant", "grape", "graph", "grasp", "grass", "grave", "great", "greek", "green", "greet", "grief", "grill", "grind", "grips", "gross", "group", "grove", "grown", "grows", "guard", "guess", "guest", "guide", "guild", "guilt", "habit", "hairs", "halls", "hands", "handy", "hangs", "happy", "harsh", "hated", "hates","haven", "hawks", "heads", "heard", "heart", "heavy", "hedge", "hello", "helps", "hence", "herbs", "highs", "hills", "hints", "hired", "hobby", "holds", "holes", "homes", "honey", "hooks", "hoped", "hopes", "horns", "horse", "hosts", "hotel", "hours", "house", "hover", "human", "hurts", "icons", "ideal", "ideas", "idiot", "image", "imply", "inbox", "incur", "index", "indie", "inner", "input", "intro", "issue", "items", "jeans", "jelly", "jewel", "joins", "joint", "jokes", "judge", "juice", "juicy", "jumps", "keeps", "kicks", "kills", "kinds", "kings", "knees", "knife", "knock", "knots", "known", "knows", "label", "lacks", "lakes", "lamps", "lands", "lanes", "large", "laser", "lasts", "later", "laugh", "layer", "leads", "leaks", "learn", "lease", "least", "leave", "legal", "lemon", "level", "lever", "light", "liked", "likes", "limbs", "limit", "lined", "linen", "liner", "lines", "links", "lions", "lists", "lived", "liver", "lives", "loads", "loans", "lobby", "local", "locks", "lodge", "logic", "logos", "looks", "loops", "loose", "lords", "loses", "loved", "lover", "loves", "lower", "loyal", "lucky", "lunar", "lunch", "lungs", "lying", "macro", "magic", "major", "maker", "makes", "males", "maple", "march", "marks", "marry", "masks", "match", "matte", "maybe", "mayor", "meals", "means", "meant", "medal", "media", "meets", "melee", "menus", "mercy", "merge", "merit", "merry", "messy", "metal", "meter", "metro", "micro", "midst", "might", "miles", "minds", "mines", "minor", "minus", "mixed", "mixer", "mixes", "model", "modem", "modes", "moist", "money", "month", "moral", "motor", "mount", "mouse", "mouth", "moved", "moves", "movie", "music", "myths", "nails", "naked", "named", "names", "nasal", "nasty", "naval", "needs", "nerve", "never", "newer", "newly", "nicer", "niche", "night", "ninja", "ninth", "noble", "nodes", "noise", "noisy", "norms", "north", "notch", "noted", "notes", "novel", "nurse", "nylon", "oasis", "occur", "ocean", "offer", "often", "older", "olive", "omega", "onion", "onset", "opens", "opera", "opted", "optic", "orbit", "order", "organ", "other", "ought", "ounce", "outer", "owned", "owner", "oxide", "packs", "pages", "pains", "paint", "pairs", "panel", "panic", "pants", "paper", "parks", "parts", "party", "pasta", "paste", "patch", "paths", "patio", "pause", "peace", "peach", "peaks", "pearl", "pedal", "peers", "perks", "pests", "petty", "phase", "phone", "photo", "piano", "picks", "piece", "piles", "pills", "pilot", "pinch", "pipes", "pitch", "pixel", "pizza", "place", "plain", "plane", "plans", "plant", "plate", "plays", "plaza", "plots", "plugs", "poems", "point", "poker", "polar", "poles", "polls", "pools", "porch", "pores", "ports", "posed", "poses", "posts", "pouch", "pound", "power", "press", "price", "pride", "prime", "print", "prior", "prize", "probe", "prone", "proof", "props", "proud", "prove", "proxy", "psalm", "pulls", "pulse", "pumps", "punch", "pupil", "puppy", "purse", "queen", "queer", "query", "quest", "queue", "quick", "quiet", "quilt", "quite", "quote", "races", "racks", "radar", "radio", "rails", "rainy", "raise", "rally", "ranch", "range", "ranks", "rapid", "rated", "rates", "ratio", "razor", "reach", "react", "reads", "ready", "realm", "rebel", "refer", "reign", "relax", "relay", "renal", "renew", "reply", "reset", "resin", "retro", "rider", "rides", "ridge", "rifle", "right", "rigid", "rings", "rinse", "risen", "rises", "risks", "risky", "rival", "river", "roads", "robot", "rocks", "rocky", "rogue", "roles", "rolls", "roman", "rooms", "roots", "ropes", "roses", "rough", "round", "route", "royal", "rugby", "ruins", "ruled", "ruler", "rules", "rural", "sadly", "safer", "salad", "sales", "salon", "sandy", "satin", "sauce", "saved", "saves", "scale", "scalp", "scans", "scare", "scarf", "scary", "scene", "scent", "scoop", "scope", "score", "scout", "scrap", "screw", "seals", "seams", "seats", "seeds", "seeks", "seems", "sells", "sends", "sense", "serum", "serve", "setup", "seven", "sewer", "shade", "shaft", "shake", "shall", "shame", "shape", "share", "shark", "sharp", "sheep", "sheer", "sheet", "shelf", "shell", "shift", "shine", "shiny", "ships", "shirt", "shock", "shoes", "shook", "shoot", "shops", "shore", "short", "shots", "shown", "shows", "sides", "siege", "sight", "sigma", "signs", "silly", "since", "sites", "sixth", "sized", "sizes", "skies", "skill", "skins", "skirt", "skull", "slate", "slave", "sleek", "sleep", "slept", "slice", "slide", "slope", "slots", "small", "smart", "smell", "smile", "smoke", "snack", "snake", "sneak", "socks", "soils", "solar", "solid", "solve", "songs", "sonic", "sorry", "sorts", "souls", "sound", "south", "space", "spare", "spark", "speak", "speed", "spell", "spend", "spent", "spice", "spicy", "spike", "spine", "spite", "split", "spoke", "spoon", "sport", "spots", "spray", "squad", "stack", "staff", "stage", "stain", "stake", "stamp", "stand", "stark", "stars", "start", "state", "stays", "steak", "steal", "steam", "steel", "steep", "steer", "stems", "steps", "stick", "stiff", "still", "stock", "stole", "stone", "stood", "stool", "stops", "store", "storm", "story", "stove", "strap", "straw", "strip", "stuck", "study", "stuff", "style", "sucks", "sugar", "suite", "suits", "sunny", "super", "surge", "sushi", "swear", "sweat", "sweet", "swept", "swift", "swing", "swiss", "sword", "syrup", "table", "taken", "takes", "tales", "talks", "tanks", "tapes", "tasks", "taste", "tasty", "taxes", "teach", "teams", "tears", "teeth", "tempo", "tends", "tenth", "tents", "terms", "tests", "texts", "thank", "theft", "their", "theme", "there", "these", "thick", "thief", "thigh", "thing", "think", "third", "those", "three", "threw", "throw", "thumb", "tiger", "tight", "tiles", "timer", "times", "tired", "tires", "title", "toast", "today", "token", "tones", "tools", "tooth", "topic", "torch", "total", "touch", "tough", "tours", "towel", "tower", "towns", "toxic", "trace", "track", "tract", "trade", "trail", "train", "trait", "trans", "traps", "trash", "treat", "trees", "trend", "trial", "tribe", "trick", "tried", "tries", "trips", "trout", "truck", "truly", "trump", "trunk", "trust", "truth", "tubes", "tuned", "tunes", "turbo", "turns", "tweet", "twice", "twins", "twist", "types", "tyres", "ultra", "uncle", "under", "union", "unite", "units", "unity", "until", "upper", "upset", "urban", "urged", "urine", "usage", "users", "using", "usual", "vague", "valid", "value", "valve", "vault", "vegan", "veins", "vents", "venue", "verse", "video", "views", "vinyl", "viral", "virus", "visit", "vital", "vivid", "vocal", "vodka", "voice", "volts", "voted", "voter", "votes", "wages", "wagon", "waist", "walks", "walls", "wants", "warns", "waste", "watch", "water", "watts", "waves", "wears", "weeds", "weeks", "weigh", "weird", "wells", "whale", "wheat", "wheel", "where", "which", "while", "white", "whole", "whose", "wider", "widow", "width", "winds", "wines", "wings", "wiped", "wired", "wires", "witch", "wives", "woman", "women", "woods", "words", "works", "world", "worms", "worry", "worse", "worst", "worth", "would", "wound", "wrath", "wrist", "write", "wrong", "wrote", "yacht", "yards", "years", "yeast", "yield", "young", "yours", "youth", "zones"];


var chosenWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
var chosenLetters = chosenWord.split("");
var userGuess = [];
var gameRound = 1;
var gameOn = false;

console.log(chosenWord);

if (gameRound === 1 && !gameOn) {
  $("#heading").addClass("dim-background");
  $("#game-board").addClass("dim-background");
  $("#keyboard").addClass("dim-background");

  $(".close-window").click(function() {
    $("#instructions").fadeOut(500);
    $("#heading").animate({opacity: 1}, 500);
    $("#game-board").animate({opacity: 1}, 500);
    $("#keyboard").animate({opacity: 1}, 500);
    gameOn = true;

  });
}

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

  if (gameOn) {

    if (userGuess.length === 5) {

      if (wordList.includes(userGuess.join("").toLowerCase())) {
        checkGuess();
        flipLetters();
        gameRound++;
        if (gameRound === 7 && userGuess.join("") != chosenWord) {
          gameLost();
          setTimeout(function() {
            $("#feedback").html("<strong>" + chosenWord + "</strong>");
            $("#feedback").animate({opacity: 1});
          }, 1200)
        } else if (userGuess.join("") === chosenWord) {
          // Animate tiles to jump
          jumpTiles();
          gameOn = false;
          setTimeout(function() {
            $("#feedback").html("<strong>Nice one!</strong>");
            $("#feedback").animate({opacity: 1});
          }, 1200)
        }
        if (gameOn) {
          userGuess = [];
        }

      } else {
        $("#feedback").html("<strong>Not in word list</strong>");
        $("#feedback").animate({opacity: 1}).delay(1000).animate({opacity: 0});
        $(".row-" + gameRound).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50);
      }

    } else {
      $("#feedback").html("<strong>Not enough letters</strong>");
      $("#feedback").animate({opacity: 1}).delay(1000).animate({opacity: 0});
      $(".row-" + gameRound).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50).animate({left: 5}, 50).animate({left: -5}, 50).animate({left: 0}, 50);
    }

  }

});

// Function to check user guess against chosen wordList
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
  var i = gameRound;
  var delay = 300;
  $("#card.row-" + i + "-letter-1").flip(true);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-2").flip(true);
  }, delay);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-3").flip(true);
  }, delay*2);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-4").flip(true);
  }, delay*3);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-5").flip(true);
  }, delay*4);
};

// lost game function
function gameLost() {

  for (var i = 1; i < 7; i++) {
    $(".back-row-6-letter-" + i).addClass("end-game");
  }

  gameOn = false;

}

// Tile jump animation
function jumpTiles() {

  var i = gameRound - 1;
  var start = 1200;
  var delay = 100;
  setTimeout(function() {
    $("#card.row-" + i + "-letter-1").animate({top: -40}, 300).animate({top: 0}, 100);
  }, start);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-2").animate({top: -40}, 300).animate({top: 0}, 100);
  }, start + delay);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-3").animate({top: -40}, 300).animate({top: 0}, 100);
  }, start + delay*2);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-4").animate({top: -40}, 300).animate({top: 0}, 100);
  }, start + delay*3);
  setTimeout(function() {
    $("#card.row-" + i + "-letter-5").animate({top: -40}, 300).animate({top: 0}, 100);
  }, start + delay*4);

};
