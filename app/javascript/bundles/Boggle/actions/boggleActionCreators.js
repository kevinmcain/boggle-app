/* eslint-disable import/prefer-default-export */

import { UPDATE_WORD, UPDATE_GAME_BOARD } from '../constants/boggleConstants';

export const updateWord = (word) => ({
  type: UPDATE_WORD,
  word,
});

export const updateGameBoard = (gameBoard) => ({
  type: UPDATE_GAME_BOARD,
  gameBoard,
});
