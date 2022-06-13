const initialState = { inLikes: [] };
const loadLikesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LIKES_DATA":
            return {
                ...state,
                inLikes: [...action.payload],
            };

        default:
            return state;
    }
};

export default loadLikesReducer;
