

// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//         'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//         't', 'u', 'v', 'w', 'x', 'y', 'z'];



//     console.log(userGuessBeforeConversion);

// }
var tvShows          = ["friends", "seinfeld", "roseanne", "ducktales"];
var remainingGuesses = 15;
var lettersPicked    = [];
var wins             = 0;
var tvShow           = tvShows[Math.floor(Math.random() * tvShows.length)];

var buildDisplayString = function() {
  var displayString = "";
  // loop thru tvShow string
  for (var i = 0; i < tvShow.length; i++) {
    // decide whether to use actual character or "_" and add that to our new string
    // the user guesses a letter
    if (false) {
      // we put that letter into the string
      displayString = displayString + tvShow.charAt(i);
    }
    else {
      //we put an underscore into the string
      displayString = displayString + "_";
    }
  }
}

var getUserChoice = function() {
  $('body').keypress(function(event) {
    return String.fromCharCode(event.keyCode).toLowerCase();
  });
}

$(document).ready(function() {
  $("#tv").on("click", function() {
     var html = "<div class='top-line'><h3>Guess A Letter To Name That TV Show</h3></div>" +
                "<div class='current-tv-show'>" + tvShow + "</div>" +
                "<div class='number-of-guesses'><h3>Number Of Guesses Remaining: " + remainingGuesses + "</h3></div>" +
                "<div class='letters-picked'><h3>Letters Picked: " + lettersPicked + "</h3></div>" +
                "<div class='wins'><h3>Wins: " + wins + "</h3></div>";

     document.querySelector('#tv-game').innerHTML = html;

     var userGuess = getUserChoice();

     console.log(userGuess);
  })
})




