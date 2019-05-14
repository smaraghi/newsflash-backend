import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store';
import 'semantic-ui-css/semantic.min.css'
import GlobalState from './context/GlobalState';

ReactDOM.render(
    <GlobalState>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    </GlobalState>
  , 
  document.getElementById('root')
);

serviceWorker.unregister();
