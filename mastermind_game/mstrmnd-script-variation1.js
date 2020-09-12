$(document).ready(function() {
//Handle buttons in the DOM and execute functions
 $('#newGamebtn').click(startNewGame);

 $('#submitGuessbtn').click(guessIt);


//handle user inputs
 var input1 = $('#input1');
 var input2 = $('#input2');
 var input3 = $('#input3');
 var input4 = $('#input4');
});

/* Populate global variables. Colors to generate answer
Var that will handle number of attempts left in the game.
Var to handle the outputted random answer
 */
var colors = ['red', 'blue', 'yellow', 'green', 'white', 'purple'];
var numberOfTries = 1;
var answer = '';
var guessAttempt = '';
var correct = 0;
var close = 0;


// Generate the mastermind's answer based on set of six colors in the array.
// Does not just shuffle the array. randColor will place a random color in each index. Could potentially create multiple instances of the same color

function randColor(){return colors[Math.floor(Math.random() * colors.length)]}

function clearGame() {
$('#guessLog').empty();
$('#feedback').html('');
}

function startNewGame() {

      // add code later to reset values for a new game.
      numberOfTries = 8;
      answer = [randColor(), randColor(), randColor(), randColor()];
      console.log("tries remaining = " + numberOfTries);

      console.log("master answer = " + answer);
      clearGame()
    }

//Handle user inputs for a guess
function guessIt() {
    guessAttempt = [input1.value, input2.value, input3.value, input4.value];
    console.log("guess attempt = " + guessAttempt);

//Decrement number of tries since a user has made a guess
    numberOfTries --;
    console.log("tries remaining = " + numberOfTries);
    if (numberOfTries == 0) {
      alert("You lose! The answer was " + answer)
      clearGame()
    }
    checkAnswer();
}

function checkAnswer(){
  correct = 0;
  close = 0;

    for (var i = 0; i < answer.length; i++) {

      if (guessAttempt[i] == answer[i]) {
        correct++
      }
      if (answer.includes(guessAttempt[i]) && guessAttempt[i] !== answer[i]) {
            close++
          }
        }
      displayFeedback()
      console.log(correct, close);
      displayGuessColors()
  }

//provide feedback
  /*all DOM manipulation inside of displayFeedback
   is now handled by jquery. I turned 9 lines of code into 3.*/
function displayFeedback() {
  /*if (correct >= 4) {
    alert('you win!')
    clearGame()
  } else {*/

    /*  var feedback = document.getElementById('feedback');
      var thisRound = document.createElement('div');
      feedback.append(thisRound); */

      $('#feedback').append("<div class='thisRound'></div>");

      function createClosePeg() {

        $(".thisRound").last().append("<div class='gray'></div>");
      /*  var peg = document.createElement('div');
        peg.className += "gray";
        thisRound.appendChild(peg);*/
      }
      function createCorrectPeg() {
        $(".thisRound").last().append("<div class='black'></div>");
        /*
        var peg = document.createElement('div');
        peg.className += "black";
        thisRound.appendChild(peg);*/
      }
// for the number of close, display that many "close" element that many times

      for (var i = 0; i < close; i++) {createClosePeg()}
      for (var i = 0; i < correct; i++) {createCorrectPeg()}


}


function displayGuessColors() {
      function createClosePeg() {
          var guessPeg = document.createElement('div');

          if (guessAttempt[i] == "red") {
          $(".thisRoundGuess").last().append("<div class='red'></div>");

          //guessPeg.className += "red";
          //guessRound.appendChild(guessPeg);
        } else if (guessAttempt[i] == "blue") {
          $(".thisRoundGuess").last().append("<div class='blue'></div>");
          //guessPeg.className += "blue";
        //  guessRound.appendChild(guessPeg);
        } else if (guessAttempt[i] == "yellow") {
          $(".thisRoundGuess").last().append("<div class='yellow'></div>");
          //guessPeg.className += "yellow";
          //guessRound.appendChild(guessPeg);
        } else if (guessAttempt[i] == "green") {
          $(".thisRoundGuess").last().append("<div class='green'></div>");
          //guessPeg.className += "green";
          //guessRound.appendChild(guessPeg);
        } else if (guessAttempt[i] == "purple") {
          $(".thisRoundGuess").last().append("<div class='purple'></div>");
          //guessPeg.className += "purple";
          //guessRound.appendChild(guessPeg);
        } else if (guessAttempt[i] == "white") {
          $(".thisRoundGuess").last().append("<div class='red'></div>");
        //guessPeg.className += "white";
        //guessRound.appendChild(guessPeg);
    }

    //
  }

    $('#guessLog').append("<div class='thisRoundGuess'></div>");
  //  var guessLog = $('#guessLog');
  //  var guessRound = $(document).add('<div></div>');
  //  guessLog.append(guessRound);

    for (var i = 0; i < guessAttempt.length; i++) {
      createClosePeg()

  }
  if (correct >= 4) { //FIXED A BUG in my original project where this code was running too early in the script, so it wouldn't clear the guess pegs.
    alert('you win!')
    clearGame()
  }
}
