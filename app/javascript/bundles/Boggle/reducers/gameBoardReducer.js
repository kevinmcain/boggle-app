import { UPDATE_GAME_BOARD } from '../constants/boggleConstants';

const gameBoard = (state = [], action) => {
  switch (action.type) {
    case UPDATE_GAME_BOARD:
      return action.gameBoard;
    default:
      return state;
  }
};

export default gameBoard;