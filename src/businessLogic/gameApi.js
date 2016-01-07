let isBoxOccupied = ({board, rowIndex, colIndex}) => board[rowIndex][colIndex] !== 0;

let move = ({board, rowIndex, colIndex, playerTurn}) => {
  return new Promise((resolve, reject) => {
    if (isBoxOccupied({board, rowIndex, colIndex})) {
      reject('occupied');
    } else {
      let newBoard  = [].concat(board);
      newBoard[rowIndex][colIndex] = playerTurn;
      resolve(newBoard);
    }
  });
};

let gameApi = {
  move
};

export default gameApi;
