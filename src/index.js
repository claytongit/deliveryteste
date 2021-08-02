import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { GloboStyles } from './Global';

ReactDOM.render(
  <React.StrictMode>
    <GloboStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
