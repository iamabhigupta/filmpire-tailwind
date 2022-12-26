import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "next-themes";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./components/App";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider attribute="class"> */}
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
