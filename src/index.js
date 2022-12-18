import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import ScrollToTop from "./Hooks/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Router>
  <HashRouter hashType="hashbang">
    {/* <React.StrictMode> */}
    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>
    {/* </React.StrictMode> */}
  </HashRouter>
  //  </Router>
);

// reportWebVitals();
