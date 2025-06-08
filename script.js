//console.log("hello");

// Create a Gameboard
// //here I put the gameBoard
// const gameBoard = {
//     firstRow: [1, 2, 3],
//     secondRow: [4, 5, 6],
//     lastRow: [7, 8, 9]
// }
// console.table(gameBoard)
// //here I played the game.
// gameBoard.firstRow[0] = "X";
// console.table(gameBoard);

//now for security issues I need to write it like this
function gameBoard(){
    const board = [];
    const row = 3;
    const column = 3;
    for(let i = 0; i < row; i++ ){
        board[i]=[];
            for (let j = 0; j < column; j++){
                board[i].push(tiles());
        }
    }    
    const getBoard = () => board;
  return {getBoard}
}
   function tiles(){
     let value = 0;
     const getMark = (player) =>{
        value = player;
     }
     getMark(player().activePlayer.mark)
     const getValue = () => value; 
        return {getMark,getValue};
   } 

   function player (){
    let playerOne = "playerOneName";
    let playerTwo = 'playerTwoName';
    let players = [{
      name: playerOne,
      mark: 'X'
      },
      {name: playerTwo,
        mark: 'O'
      }];
    let activePlayer = players[0];
    function switchPlayer(){
      activePlayer === player[0] ? player[1] : player[0];
      return activePlayer;
    }
    return {activePlayer, switchPlayer};
   }
   
   