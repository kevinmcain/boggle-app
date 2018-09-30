import { UPDATE_GAME_ID } from '../constants/boggleConstants';

const gameId = (state = [[]], action) => {
  switch (action.type) {
    case UPDATE_GAME_ID:
      return action.gameId;
    default:
      return state;
  }
};

export default gameId;