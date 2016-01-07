import { BOX_OCCUPIED } from '../constants/ErrorTypes';

let isBoxOccupied = ({board, rowIndex, colIndex}) => board[rowIndex][colIndex] !== 0;

let alternatePlayerTurn = (oldPlayerTurn) => {
  let newPlayerTurn = oldPlayerTurn === 1 ? 2 : 1;
  return newPlayerTurn;
};

let getWinner = (board) => {
  //TODO: check for winner

  return 0;
};

let move = ({gameState, rowIndex, colIndex}) => {
  let {board, playerTurn} = gameState;
  return new Promise((resolve, reject) => {
    if (isBoxOccupied({board, rowIndex, colIndex})) {
      reject({error: BOX_OCCUPIED});
    } else {
      let newGameState = Object.assign({}, gameState);
      newGameState.board[rowIndex][colIndex] = playerTurn;
      newGameState.playerTurn = alternatePlayerTurn(gameState.playerTurn);

      // check for win condition
      newGameState.winner = getWinner(newGameState.board);

      resolve(newGameState);
    }
  });
};

let gameApi = {
  move
};

export default gameApi;
