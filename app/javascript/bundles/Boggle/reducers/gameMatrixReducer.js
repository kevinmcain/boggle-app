import { UPDATE_GAME_MATRIX } from '../constants/boggleConstants';

const gameMatrix = (state = [[]], action) => {
  switch (action.type) {
    case UPDATE_GAME_MATRIX:
      return action.gameMatrix;
    default:
      return state;
  }
};

export default gameMatrix;