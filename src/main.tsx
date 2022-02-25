import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Route from "./components/Route";
import { Choices } from "./pages/Choices";

ReactDOM.render(
  <React.StrictMode>
    <Route path="/">
      <App />
    </Route>
    <Route path="/choices">
      <Choices />
    </Route>
  </React.StrictMode>,
  document.getElementById("root")
);
