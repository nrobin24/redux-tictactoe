import { combineReducers } from 'redux';
import gameState from './gameState';
import notificationState from './notificationState';

const rootReducer = combineReducers({
  gameState,
  notificationState
});

export default rootReducer;
