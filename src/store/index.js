import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer/index";
import loadCatalogReducer from "./reducer/loadCatalogReducer";

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log("store data: ", store.getState())
})

export {store}
