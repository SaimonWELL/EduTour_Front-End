import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


const rootElem = document.getElementById('root');
if(!rootElem) throw new Error('Do not find the root element');
const root = ReactDOM.createRoot(rootElem);

//все страницы сайта


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
);

export default root;

reportWebVitals();