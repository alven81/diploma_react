const initialState = { isOpenReg: false }

 const RegModalReducer = (state = initialState, action) => {
    //console.log(action);
    switch (action.type) {
        case "OPEN_REG_MODAL":
            return {
                ...state,
                isOpenReg: action.payload
            }
        case "CLOSE_REG_MODAL":
            return {
                ...state,
                isOpenReg: action.payload
            }
        default:
            return state
    }
}
    
export { RegModalReducer }