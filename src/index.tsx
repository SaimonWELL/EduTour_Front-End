import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import store from "./store";
import {Provider} from "react-redux";


const rootElem = document.getElementById('root');
if(!rootElem) throw new Error('Do not find the root element');
const root = ReactDOM.createRoot(rootElem);




root.render(
  <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
      </React.StrictMode>
  </Provider>
);

export default root;

reportWebVitals();