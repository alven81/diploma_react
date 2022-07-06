import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer/index";

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
	console.warn("store data: ", store.getState());
});

export default store ;
