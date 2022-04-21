import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import loadCatalogReducer from "./reducer/loadCatalogReducer";

const store = createStore(loadCatalogReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log("store data: ", store.getState())
})

export {store}