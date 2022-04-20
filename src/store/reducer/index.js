import { combineReducers, applyMiddleware } from "redux";
import { catalogReducer } from "./catalogReducer";
import { catalogProdReducer } from "./catalogProdReducer";
import { indexReducer } from "./indexReducer";
import thunk from "redux-thunk";
import  loadCatalogReducer  from "./loadCatalogReducer";
import { compose } from "redux";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers(
    {
    catalogData: catalogReducer,
    catalogProdData: catalogProdReducer,
    itemIndexData: indexReducer,
    loadData: loadCatalogReducer
    
},
composeEnhancer(applyMiddleware(thunk))
);


export { reducer } 