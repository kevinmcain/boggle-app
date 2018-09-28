import { createStore } from 'redux';
import boggleReducer from '../reducers/boggleReducer';

const configureStore = (railsProps) => (
  createStore(boggleReducer, railsProps)
);

export default configureStore;
