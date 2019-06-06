// src/js/actions/index.js
import { ADD_ARTICLE, ADD_NAME } from "../constants/action-types";

const addArticle = (title) => {
  return { type: ADD_ARTICLE, payload: title };
}

const addName = (name) => {
  return { type: ADD_NAME, payload: name };
}

export {addArticle, addName}