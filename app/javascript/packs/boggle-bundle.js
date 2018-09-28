import ReactOnRails from 'react-on-rails';

import BoggleApp from '../bundles/Boggle/startup/BoggleApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  BoggleApp,
});
