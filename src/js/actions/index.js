// src/js/actions/index.js
import { ADD_ARTICLE } from "../constants/action-types";
export function addArticle(title, id) {
  let payload = {title: title, id: id};
  return { type: ADD_ARTICLE, payload };
}
export function addName(name) {
  return { type: "ADD_NAME", name };
}