import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

const rootReducer = combineReducers({
    reducer,
});

export const store = configureStore({
    reducer: rootReducer
})