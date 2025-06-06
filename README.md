# Tic-Tac-Toe
The Odin Project javascript course project

The project is to make a Tic-Tac-Toe game.
-I need to define what a Tic-Tac-Toe game is
  - In my own words of definition, tic-tac-toe is a game played by 2 players. It is played in a 3x3 grid gameboard (so a total of 9 tiles), the main mechanics of the game is for each player to put there mark inside each tiles. The goal for the players is to mark 3 rows of tiles (either horizontal, vertical, or diagonal).
- Gameboard => It has 9 tiles total that creates a 3x3 grid.
- To Win =>  you have to mark 3 tiles, their are 3 horizontal, 3 vertical and 2 diagonal possible combinations (meaning 24 possible tiles).
- The Mechanics => Players play the game by each marking 1 tile out of 9 tiles with the goal of marking 3 consecutive (straight) tiles or all the tiles are marked.

  Creating the Code;
  first I need to create the gameboard.
  - I will try creating an array that stores 3 objects. Inside those object are 3 tiles, this makes the 3x3 grid. 
  - To play the game I need to put X or O values in the object; I'll try to start in creating a function that console.log X or O in any of the tiles everytime I press a key.
  - I'll then specify which tile I want to put the X or O values.
  -  then put the conditions for player, each player can only put 1 mark at a time (this is basically the only condition).
  - then I'll make a function to check the To Win conditions.
  - To Win conditions their are 24 possible tiles with 8 possile combinations. (I dont know how to make this shorter tho).
  - Then for score. 1 point to the player the met To Win conditions.
