import { createStore } from 'redux';
import { combineReducers } from 'redux'
import word from '../reducers/wordReducer';
import gameBoard from '../reducers/gameBoardReducer';

const rootReducer = combineReducers({word, gameBoard});

const configureStore = (railsProps) => (
  createStore(rootReducer, railsProps)
);

export default configureStore;
