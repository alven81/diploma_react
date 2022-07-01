const initialState = { showZoomImage: [false, ""] };

const zoomImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_ZOOM_IMAGE":
            return {
                ...state,
                showZoomImage: action.payload,
            };
        default:
            return state;
    }
};

export { zoomImageReducer };
