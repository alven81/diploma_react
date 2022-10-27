import { combineReducers } from "redux";
import { indexReducer } from "store/reducer/indexReducer";
import { isUserLogInReducer } from "store/reducer/isUserLogInReducer";
import { isLeftSideMenuStatusReducer } from "store/reducer/leftSideMenuStatusReducer";
import loadCartReducer from "store/reducer/loadCartReducer";
import loadLikesReducer from "store/reducer/loadLikesReducer";
import loadCatalogReducer from "store/reducer/loadCatalogReducer";
import loadCategoryReducer from "store/reducer/loadCategoryReducer";
import { LogModalReducer } from "store/reducer/LogReducer";
import { RegModalReducer } from "store/reducer/RegReducer";
import { zoomImageReducer } from "store/reducer/zoomReducer";
import loadSearchReducer from "store/reducer/searchResultReducer";
import loadSearchCategoryReducer from "store/reducer/searchCategoryResultReducer";
import { AlertReducer } from "store/reducer/AlertReducer";
import { uiLanguageReducer } from "store/reducer/uiLanguageReducer";

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
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
    imageZoom: zoomImageReducer,
    loadLanguage: uiLanguageReducer,
});

export { reducer };
