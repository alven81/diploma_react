import { combineReducers } from "redux";
import { searchReducer } from "./reducers";
import loadCartReducer from "./loadCartReducer";

const reducer = combineReducers({
    searchData: searchReducer,
    loadCart: loadCartReducer,
});

export { reducer };
