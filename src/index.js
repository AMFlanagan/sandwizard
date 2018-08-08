import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import React from "react";


console.log(document.getElementById("app"));
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app")
);