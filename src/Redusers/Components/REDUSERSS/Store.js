import { combineReducers, legacy_createStore } from "redux";
import OnDutyReduser from "./OnDuty-reduser";
import PostReduser from "./posts-reduser";

let redusers = combineReducers({
  post: PostReduser,
  onduty: OnDutyReduser,
});
let store = legacy_createStore(redusers);
export default store;
