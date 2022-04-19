import { combineReducers } from "redux";
import { catalogReducer } from "./catalogReducer";
import { catalogProdReducer } from "./catalogProdReducer";
import { indexReducer } from "./indexReducer";

const reducer = combineReducers({
    catalogData: catalogReducer,
    catalogProdData: catalogProdReducer,
    itemIndexData: indexReducer
})

export { reducer } 