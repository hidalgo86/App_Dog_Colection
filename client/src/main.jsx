import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";

import "normalize.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

// la URL_base de las llamadas axios
axios.defaults.baseURL = "https://appdogs-production.up.railway.app"
// import.meta.VITE_API || "http://localhost:3001";

console.log(import.meta.VITE_API)
console.log(import.meta.VITE)

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: orange,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// "start": "concurrently --kill-others \"less-watch-compiler --config less-watcher.config.json\" \"react-scripts start\"",
// "less": "^4.1.3",
// "less-watch-compiler": "^1.16.3"
