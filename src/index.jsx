import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "next-themes";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider attribute="class"> */}
    <Router>
      <App />
    </Router>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
