import { combineReducers } from 'redux';
import { BOGGLE_NAME_UPDATE } from '../constants/boggleConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case BOGGLE_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const boggleReducer = combineReducers({ name });

export default boggleReducer;
