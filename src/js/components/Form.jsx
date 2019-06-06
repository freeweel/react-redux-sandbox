// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle, addName } from "../actions/index";
// could just directly access store
import store from '../store/index';
import { ADD_ARTICLE, ADD_NAME } from '../constants/action-types';

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: article => dispatch(addArticle(article)),
    addName: name => dispatch(addName(name))
  };
}

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  // This adds the article going thru all the connecting and mapping of props
  // Seems to just abstract and obfuscate.  Not sure why this is an advantage???
  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title;
    this.props.addArticle(title);
    this.setState({ title: "" });
  }

  // This directly adds the article to the root store
  dispatchNow = () => {
    store.dispatch(addArticle("Dispatched!"));
  }

  // This directly gets the current article
  getArticle = () => {
    let value = store.getState(ADD_ARTICLE);
    alert('Current state: ' + value.articles[value.articles.length - 1]);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success btn-lg">
            SAVE
        </button>
        </form>
        <hr/>
        <button onClick={this.dispatchNow} className="btn btn-primary btn-lg">
          DISPATCH
        </button>
        &#160;
        <button onClick={this.getArticle} className="btn btn-warning btn-lg">
          GET
        </button>
      </div>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;