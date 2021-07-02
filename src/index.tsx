import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';
import { BrowserRouter  } from 'react-router-dom';
import { UserState } from './context/user'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
    <UserState>
    <App />
    </UserState>
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
