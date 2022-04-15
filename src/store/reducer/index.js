import { combineReducers } from "redux";
import { catalogReducer } from "./catalogReducer";

const reducer = combineReducers({
    catalogData: catalogReducer
})

export { reducer } 