import { combineReducers } from "redux";
import { indexReducer } from "./indexReducer";
import { isUserLogInReducer } from "./isUserLogInReducer";
import loadCartReducer from "./loadCartReducer";
import  loadCatalogReducer  from "./loadCatalogReducer";
import { LogModalReducer } from "./LogReducer";
import { RegModalReducer } from "./RegReducer";

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers(
    {
        itemIndexData: indexReducer,
        loadData: loadCatalogReducer,
        loadCart: loadCartReducer,
        isUserLogIn: isUserLogInReducer,
        isOpenReg: RegModalReducer,
        isOpenLog: LogModalReducer,
    },
);

export { reducer }