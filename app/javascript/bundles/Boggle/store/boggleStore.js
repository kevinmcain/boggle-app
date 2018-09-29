import { createStore } from 'redux';
import { combineReducers } from 'redux'
import word from '../reducers/wordReducer';
import gameMatrix from '../reducers/gameMatrixReducer';

const rootReducer = combineReducers({word, gameMatrix});

const configureStore = (railsProps) => (
  createStore(rootReducer, railsProps)
);

export default configureStore;
