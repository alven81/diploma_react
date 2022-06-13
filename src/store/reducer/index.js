import { combineReducers } from "redux";
import { indexReducer } from "./indexReducer";
import { isUserLogInReducer } from "./isUserLogInReducer";
import { isLeftSideMenuStatusReducer } from "./leftSideMenuStatusReducer";
import loadCartReducer from "./loadCartReducer";
import loadLikesReducer from "./loadLikesReducer";
import  loadCatalogReducer  from "./loadCatalogReducer";
import loadCategoryReducer from "./loadCategoryReducer";
import { LogModalReducer } from "./LogReducer";
import { RegModalReducer } from "./RegReducer";
import { zoomImageReducer } from "./zoomReducer";
import loadSearchReducer from "./searchResultReducer";
import loadSearchCategoryReducer from "./searchCategoryResultReducer";
import { AlertReducer } from "./AlertReducer";

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers(
    {
        itemIndexData: indexReducer,
        loadData: loadCatalogReducer,
        loadCart: loadCartReducer,
        loadLikes: loadLikesReducer,
        loadSearch: loadSearchReducer,
        isUserLogIn: isUserLogInReducer,
        isOpenReg: RegModalReducer,
        isOpenLog: LogModalReducer,
        whichIsLeftSideMenuStatus: isLeftSideMenuStatusReducer,
        loadCategoryList: loadCategoryReducer,
        searchCategoryResult: loadSearchCategoryReducer,
        alertMessage: AlertReducer,
        imageZoom: zoomImageReducer
    },
);

export { reducer }