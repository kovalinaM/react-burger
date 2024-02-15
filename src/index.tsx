import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/app/app";

import './index.css'

const elRoot:HTMLElement = document.querySelector("#root") as HTMLElement;
const root = ReactDOM.createRoot(elRoot);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);