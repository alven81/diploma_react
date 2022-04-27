import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { isUserLogInReducer } from "./reducer/isUserLogInReducer";
import loadCatalogReducer from "./reducer/loadCatalogReducer";

const store = createStore(loadCatalogReducer, applyMiddleware(thunk));
const userLogInfo = createStore(isUserLogInReducer)

userLogInfo.subscribe(() => {
    console.log("store data: ", userLogInfo.getState())
})

export {store, userLogInfo}