/* eslint-disable import/prefer-default-export */

import { UPDATE_WORD, UPDATE_GAME_MATRIX } from '../constants/boggleConstants';

export const updateWord = (word) => ({
  type: UPDATE_WORD,
  word,
});

export const updateGameMatrix = (gameMatrix) => ({
  type: UPDATE_GAME_MATRIX,
  gameMatrix,
});
