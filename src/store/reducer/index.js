import { combineReducers } from "redux";
import { indexReducer } from "./indexReducer";
import { isUserLogInReducer } from "./isUserLogInReducer";
import  loadCatalogReducer  from "./loadCatalogReducer";

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers(
    {
        itemIndexData: indexReducer,
        loadData: loadCatalogReducer,
        isUserLogIn: isUserLogInReducer
    },
);

export { reducer } 