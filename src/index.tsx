import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./components/app/app";

const elRoot:HTMLElement = document.querySelector("#root") as HTMLElement;
const root = ReactDOM.createRoot(elRoot);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);