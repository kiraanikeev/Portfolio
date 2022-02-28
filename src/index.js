import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import styles from "./Preloader.module.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div className={styles.preloader}>
          <div className={styles.preloader__container}>
            <span className={styles.preloader__round}></span>
          </div>
        </div>

        }
      >
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
