import { combineReducers } from 'redux';
import fuelSavingsAppState from './fuelSavings';
import gameState from './gameState';

const rootReducer = combineReducers({
  fuelSavingsAppState,
  gameState
});

export default rootReducer;
