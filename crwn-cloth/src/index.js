import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Getting Provider from redux 
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './Redux/Store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

