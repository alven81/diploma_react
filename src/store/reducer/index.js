import { combineReducers } from "redux";
import { catalogReducer } from "./catalogReducer";
import { indexReducer } from "./indexReducer";

const reducer = combineReducers({
    catalogData: catalogReducer,
    itemIndexData: indexReducer
})

export { reducer } 