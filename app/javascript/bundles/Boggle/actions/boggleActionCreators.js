/* eslint-disable import/prefer-default-export */

import { BOGGLE_NAME_UPDATE } from '../constants/boggleConstants';

export const updateName = (text) => ({
  type: BOGGLE_NAME_UPDATE,
  text,
});
