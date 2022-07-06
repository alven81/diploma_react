const initialState = {
	search: [],
};

const searchReducer = (state = initialState, action) => {
	console.warn("reduсer action: ", action);
	switch (action.type) {
		case "GET_SEARCH_RESULT":
			return {
				...state,
				search: [...action.payload],
			};

		default:
			return state;
	}
};

export { searchReducer };
