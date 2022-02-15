import { combineReducers } from "redux";
import { VideoReducer } from "./VideoReducer";

const combineReducer = combineReducers;

const rootReducer = combineReducer({
    videos: VideoReducer,
});

export default rootReducer;
