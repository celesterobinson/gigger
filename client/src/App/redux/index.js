import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import gig from "./gig";
import modal from "./modal";

const rootReducer = (combineReducers({ gig, modal }));

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
})

export default store;