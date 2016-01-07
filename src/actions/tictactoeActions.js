import * as types from '../constants/ActionTypes';
import gameApi from '../businessLogic/gameApi';


export function moveSuccess(payload) {
	console.log('got move success with');
	console.log(payload);
	return { type: types.MOVE_SUCCESS, payload };
}

export function moveError(payload) {
	console.log('got move error with');
	console.log(payload);
	return { type: types.MOVE_ERROR, payload };
}

export function moveRequest(payload) {
	console.log('got move request');
	console.log('payload is');
	console.log(payload);
	return (dispatch) => {
		gameApi
			.move(payload)
			.then((newGameState) => {
				dispatch(moveSuccess(newGameState));
			})
			.catch((gameError) => dispatch(moveError(gameError)));
	};
}
