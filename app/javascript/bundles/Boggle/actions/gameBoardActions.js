/* eslint-disable import/prefer-default-export */

import { UPDATE_GAME_BOARD } from '../constants/boggleConstants';

export const updateGameBoard = (gameBoard) => ({
  type: UPDATE_GAME_BOARD,
  gameBoard,
});
