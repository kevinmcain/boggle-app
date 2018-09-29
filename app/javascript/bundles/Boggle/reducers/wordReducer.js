import { UPDATE_WORD } from '../constants/boggleConstants';

const word = (state = '', action) => {
  switch (action.type) {
    case UPDATE_WORD:
      return action.word;
    default:
      return state;
  }
};

export default word;
