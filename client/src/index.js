import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import dotenv from "dotenv";
import "normalize.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
dotenv.config();

// la URL_base de las llamadas axios
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: orange, 
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// "start": "concurrently --kill-others \"less-watch-compiler --config less-watcher.config.json\" \"react-scripts start\"",
// "less": "^4.1.3",
// "less-watch-compiler": "^1.16.3"
