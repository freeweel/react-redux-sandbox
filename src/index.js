// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// // Added by PV for redux tutorial
// import index from "./js/index"

// ReactDOM.render(<App />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from './App';
import * as serviceWorker from './serviceWorker';
// Added by PV for redux tutorial (allows console testing)
import index from "./js/index"

const testMe = () => { alert("Top Level!") };

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
