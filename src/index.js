import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let coupMng = document.getElementById('coupMng');
ReactDOM.render(
  <React.StrictMode>
    <App fUrl={coupMng.dataset.fUrl} inrow={coupMng.dataset.inrow} category={coupMng.dataset.category} type={coupMng.dataset.type}/>
  </React.StrictMode>,
  coupMng
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
