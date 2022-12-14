import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App';
import './index.css';
const container = document.getElementById('app-root');
const root = createRoot(container!);

const renderApp = (Component: Function) => {
  root.render(<Component />);
};

renderApp(App);
