import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import gig from "./gig";

const rootReducer = (combineReducers({ gig }));

let store = createStore(rootReducer, applyMiddle(thunk));

store.subscribe(() => {
    console.log(store.getState());
})

export default store;