import * as types from '../constants/ActionTypes';
import * as errors from '../constants/ErrorTypes';
import gameApi from '../businessLogic/gameApi';


export function showNotification(payload) {
	return { type: types.SHOW_NOTIFICATION, payload };
}

export function clearNotification() {
	return { type: types.CLEAR_NOTIFICATION };
}

export function moveSuccess(payload) {
	return { type: types.MOVE_SUCCESS, payload };
}

export function moveError(payload) {
	let { error } = payload;

	if (error === errors.BOX_OCCUPIED) {
		return (dispatch) => {
			dispatch(showNotification({text: 'Sorry, that box is occupied'}));
			setTimeout(() => {
				dispatch(clearNotification());
			}, 2000);
		};
	} else {
		console.error('unexpected error');
		console.error(error);
	}
}

export function moveRequest(payload) {
	return (dispatch) => {
		gameApi
			.move(payload)
			.then((newGameState) => {
				dispatch(moveSuccess({newGameState}));
			})
			.catch((gameError) => dispatch(moveError(gameError)));
	};
}
