import React from "react";
import {StylesProvider, ThemeProvider} from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import theme from "./theme";
// FONTS AND STYLES
import "./styles/main.scss";
// APP
import App from "./components/App";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
            <App/>
        </StylesProvider>
    </ThemeProvider>,
    document.getElementById("root")
);
