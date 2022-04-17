const initialState = { catalogList: []}

 const catalogReducer = (state = initialState, action) => {
    //console.log(action);
    switch (action.type) {
        case "ADD_CATALOG_DATA":
            return {
                ...state,
                catalogList: [...action.payload]
            }
        default:
            return state
    }
}
    
export { catalogReducer }