import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
  articles: [], names: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  else if (action.type === "ADD_NAME") {
    return Object.assign({}, state, {
      names: state.names.concat(action.payload)
    });    
  }
  return state;
}
export default rootReducer;