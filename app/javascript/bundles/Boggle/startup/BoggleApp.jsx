import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/boggleStore';
import BoggleContainer from '../containers/BoggleContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const BoggleApp = (props) => (
  <Provider store={configureStore(props)}>
    <BoggleContainer />
  </Provider>
);

export default BoggleApp;
