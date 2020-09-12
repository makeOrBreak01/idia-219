Previously written in vanilla javascript, our assignment was to re-write portions of our mastermind code with jQuery to make it more efficient.

If you are unfamiliar with mastermind, it's a guessing puzzle game. The rules are explained further here: https://en.wikipedia.org/wiki/Mastermind_(board_game)

In order for the game to work, I had to program in the following tasks:
1. Starting a new game, and also clearing the data if a previous game exists.
2. Handle the user's color guesses through 4 inputs.
3. Count the amount of attempts made. After 8 attempts, the player loses and receives an alert. The game data is cleared/reset.
4. Loop through the correct answer while checking against the user's guess through another loop. 
5. If a guess is wrong, there is no peg displayed. If a guess is correct, create a black peg for feedback. The trickiest part - if a user guesses a color that is correct,
but it's in the wrong place, create a black peg for feedback.
6. If all of the pegs are guessed correctly in one turn, notify that the user has won and reset the game data.
