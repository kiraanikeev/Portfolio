import React , { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import styles from "./App.module.css"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";
import time from './img/time-6-128.png'
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={(<div><img className={styles.time} src={time}/></div>)}>
        <App />
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
