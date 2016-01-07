import {SHOW_NOTIFICATION, CLEAR_NOTIFICATION} from '../constants/ActionTypes';

const initialState = '';

export default function notificationState(state = initialState, action) {
	switch (action.type) {
		case SHOW_NOTIFICATION:
      return action.payload.text;
    case CLEAR_NOTIFICATION:
      return initialState;
		default:
			return state;
	}
}
