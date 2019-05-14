import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import GlobalState from './context/GlobalState';

ReactDOM.render(
    <GlobalState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalState>, 
  document.getElementById('root')
);

serviceWorker.unregister();
