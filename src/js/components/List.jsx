// src/js/components/List.jsx
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

let key = 0;

const ConnectedList = ({articles}) => (
  <ol className="list-group list-group-flush">
    {articles.map(articleName => (
      <li className="list-group-item" key={++key}>
        {articleName}
      </li>
    ))}
  </ol>
);

const List = connect(mapStateToProps)(ConnectedList);
export default List;