/**
 * 
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyLayer from './MyLayer.js';
// Stuff from Redux tutorial
import List from "./js/components/List";
import Form from "./js/components/Form.jsx";

const App = () => (
  <div className="App">
    {/* <button onClick={() => testMe()}>Click...</button> */}
    <img src={logo} className="App-logo" />
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
    <div>
      <MyLayer />
    </div>
  </div>
);
export default App;

