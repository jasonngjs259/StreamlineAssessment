const VideoInitState = {
    video: null,
};

export const VideoReducer = (state = VideoInitState, action) => {
    switch (action.type) {
        case "INSERT_VIDEO":
            return {
                ...state,
                video: action.video,
            };

        default:
            return state;
    }
};
