import { combineReducers } from "redux";
import { searchReducer } from "./reducers";

const reducer = combineReducers({
    search: searchReducer,
});

export { reducer };
