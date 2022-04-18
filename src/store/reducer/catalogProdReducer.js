const initialState = { catalogProdList: []}

 const catalogProdReducer = (state = initialState, action) => {
    //console.log(action);
    switch (action.type) {
        case "ADD_CATALOG_PROD_DATA":
            return {
                ...state,
                catalogProdList: [...action.payload]
            }
        default:
            return state
    }
}
    
export { catalogProdReducer }