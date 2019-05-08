# My Tic Tac Toe Game Project

## Technologies used in the project:
* Git
* Javascript
* HTML
* CSS
* jQuery
* Sweet Alert https://sweetalert.js.org/guides/

## The process of developing the game:
1. Starting with a simple HTML file and few CSS.
2. Simplify the problem to small steps and do them one by one.
3. Started with every time I click on the boxes put X in it.
4. Let them alternate between X and O.
5. Store each move in an array.
6. Get the winner by checking if any line has a matching symbol after the fifth move if it reaches nine moves without winner it will be a tie.
7. Get the score for each player and display it underneath the board.
8. Be able to start a new game without refresh the page or lose the scores by click on `New Game`.
9. Add some sound effects when clicking on the boxes and if someone wins or ties
10. Add AI player to play against by clicking `Play Against AI`.

## How I get the winner 
    There are 8 possibilities to win if X or O create a line across the board it's a win, so I did a condition if the content of a line is matched and it's not empty it will be a win.

## User stories
* As a user, I should be able to click on a box to add X first and then O, and so on 
* As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next above the board
* As a user, I should be shown a sweet alert when I win, lose or tie
* As a user, I should be able to play the game again without refreshing the page by click on `New Game`
* As a user, I should be able to hear sound effects every time I click on a box or sweet alert was shown
* As a user, I should be able to play against AI by click on `Play Against AI`
