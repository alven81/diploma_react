const initialState = {
    languageIs: "eng",
};

const uiLanguageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UI_LANGUAGE":
            return {
                ...state,
                languageIs: action.payload,
            };
        default:
            return state;
    }
};

export { uiLanguageReducer };
