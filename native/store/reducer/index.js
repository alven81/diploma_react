import { combineReducers } from "redux";
import { searchReducer } from "./reducers";
import loadCartReducer from "./loadCartReducer";
import loadCatalogReducer from "./loadCatalogReducer";
import { indexReducer } from "./indexReducer";

const reducer = combineReducers({
    searchData: searchReducer,
    loadCart: loadCartReducer,
    loadData: loadCatalogReducer,
    itemIndexData: indexReducer,
});

export { reducer };
