const initialState = {}

 const isUserLogInReducer = (state = initialState, action) => {
    console.log("action", action);
    switch (action.type) {
        case "IS_USER_LOG_IN":
            return {
                ...state,
                isUserLogInInfo: {...action.payload}
            }
        default:
            return state
    }
}
    
export { isUserLogInReducer }