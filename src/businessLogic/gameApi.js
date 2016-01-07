import { BOX_OCCUPIED } from '../constants/ErrorTypes';

let isBoxOccupied = ({board, rowIndex, colIndex}) => board[rowIndex][colIndex] !== 0;

let move = ({gameState, rowIndex, colIndex}) => {
  let {board, playerTurn} = gameState;
  return new Promise((resolve, reject) => {
    if (isBoxOccupied({board, rowIndex, colIndex})) {
      reject({error: BOX_OCCUPIED});
    } else {
      let newGameState = Object.assign({}, gameState);
      newGameState.board[rowIndex][colIndex] = playerTurn;
      resolve(newGameState);
    }
  });
};

let gameApi = {
  move
};

export default gameApi;
