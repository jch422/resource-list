import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import ResourcePresenter from "./app/resource_presenter";

const resourcePresenter = new ResourcePresenter([]);

ReactDOM.render(
  <App presenter={resourcePresenter} />,
  document.getElementById("root")
);
