import React from "react";
import ReactDOM from "react-dom";
import Route from "./components/Route";
import { Layout } from "./layout";
import { Choices } from "./pages/Choices";

ReactDOM.render(
  <React.StrictMode>
    <Route path="/" title="Nested ChoiceLists and Help Drawer">
      <Choices />
    </Route>
  </React.StrictMode>,
  document.getElementById("root")
);
