import {MOVE_SUCCESS} from '../constants/ActionTypes';

const initialState = {
  turn: 1,
  board: [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ],
  playerTurn: 1
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using Object.assign to create a copy of current state
//and update values on the copy.
export default function gameState(state = initialState, action) {
	switch (action.type) {
		case MOVE_SUCCESS:
      return action.payload.newGameState;

		default:
			return state;
	}
}
