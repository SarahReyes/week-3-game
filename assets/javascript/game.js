

// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//         'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//         't', 'u', 'v', 'w', 'x', 'y', 'z'];

var pickRandom = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var tvShows = ["friends", "seinfeld", "roseanne", "ducktales"];
var remainingGuesses = 15;
var lettersPicked = [];
var wins = 0;
var tvShow = pickRandom(tvShows);
var userGuess;

var buildDisplayString = function() {
  var displayString = "";
  // loop thru tvShow string
  for (var i = 0; i < tvShow.length; i++) {
    // decide whether to use actual character or "_" and add that to our new string
    if (hasUserPickedThisLetter(tvShow[i])) {
      // we put that letter into the string
      displayString = displayString + tvShow[i];
    }
    else {
      //we put an underscore into the string
      displayString = displayString + "_";
    }
  }
  return displayString
}

//function to see if the letter the user picks is inside of the word
var hasUserPickedThisLetter = function(letter) {
  var answer = false;
  for (var i = 0; i < lettersPicked.length; i++) {
    if (lettersPicked[i] === letter) {
      answer = true;
    }
  }
  return answer;
};

var updateHtml = function(){
  document.querySelector('#tv-game').innerHTML = "<div class='top-line'><h3>Guess A Letter To Name That TV Show</h3></div>" +
    "<div class='current-tv-show'>" + buildDisplayString() + "</div>" +
    "<div class='number-of-guesses'><h3>Number Of Guesses Remaining: " + remainingGuesses + "</h3></div>" +
    "<div class='letters-picked'><h3>Letters Picked: " + lettersPicked + "</h3></div>" +
    "<div class='wins'><h3>Wins: " + wins + "</h3></div>";
};

var noUnderscores = function(){
  var answer = true;
  for (var i = 0; i < tvShow.length; i++) {
    if (buildDisplayString()[i] === "_") {
      answer = false;
    }
  }
  return answer;
};

$(document).ready(function() {
  $("#tv").on("click", function() {
    updateHtml();
    //user guess (key on keyboard pressed) is logged. Using the function it's called up in the HTMLs
    document.onkeyup = function(event) {
      userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      //has the user already picked the letter, don't repeat in the line
      if (!hasUserPickedThisLetter(userGuess)) {
        lettersPicked.push(userGuess);
      }
      //deducted from remaining guesses each time there is a user guess
      remainingGuesses--;

      if (noUnderscores()) {
        wins = wins + 1;
      }


      updateHtml();
    };
  });
});



















