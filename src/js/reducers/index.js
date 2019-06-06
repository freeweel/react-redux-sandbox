import { ADD_ARTICLE, ADD_NAME } from "../constants/action-types";
const initialState = {
  articles: [], names: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    console.log("ACTION: " + JSON.stringify(action));
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  else if (action.type === ADD_NAME) {
    return Object.assign({}, state, {
      names: state.names.concat(action.payload)
    });    
  }
  return state;
}
export default rootReducer;