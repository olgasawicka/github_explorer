import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./reducers/usersReducer";
import userReposReducer from "./reducers/userReposReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  usersReducer,
  userReposReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
