import { combineReducers, legacy_createStore } from "redux";
import PostReduser from "./Redusers/posts-reduser";
let redusers = combineReducers({
  post: PostReduser,
});
let store = legacy_createStore(redusers);
export default store;
