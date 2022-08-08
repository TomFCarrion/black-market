import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const renderApp = (Component: Function) => {
  render(<Component />, document.getElementById('app-root'));
};

renderApp(App);
