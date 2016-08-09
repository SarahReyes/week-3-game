

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

// document.onkeyup = function(event) {
//     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//     console.log(userGuessBeforeConversion);

// }
var tvShow = "Cheers";
var numberOfGuesses = 15;
var lettersPicked;
var wins;

document.onkeyup = function(event) {
   var html = "<div class='top-line'><h3>Guess A Letter To Name That TV Show</h3></div>" +
              "<div class='current-tv-show'>" + tvShow + "</div>" +
              "<div class='number-of-guesses'><h3>Number Of Guesses Remaining: " + numberOfGuesses + "</h3></div>" +
              "<div class='letters-picked'><h3>Letters Picked: " + lettersPicked + "</h3></div>" +
              "<div class='wins'><h3>Wins: " + wins + "</h3></div>";

   document.querySelector('#tv-game').innerHTML = html;

}



//I need to make the "start" text go away when someone presses any key

    // possibly use for replacing the _? $("a").replaceWith( "o" );
