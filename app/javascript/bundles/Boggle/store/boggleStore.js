import { createStore } from 'redux';
import { combineReducers } from 'redux'
import word from '../reducers/wordReducer';
import gameMatrix from '../reducers/gameMatrixReducer';
import gameId from '../reducers/gameIdReducer';

const rootReducer = combineReducers({word, gameMatrix, gameId});

const configureStore = (railsProps) => (
  createStore(rootReducer, railsProps)
);

export default configureStore;
