import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import "./styles.css";
import App from "./App";
import * as registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker.unregister();