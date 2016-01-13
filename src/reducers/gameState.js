import {MOVE_SUCCESS} from '../constants/ActionTypes';
import {initialState} from '../constants/GameConfig';

export default function gameState(state = initialState, action) {
	switch (action.type) {
		case MOVE_SUCCESS:
      return action.payload.newGameState;

		default:
			return state;
	}
}
