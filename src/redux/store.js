import React from "react"
import { createStore, combineReducers } from 'redux'

import aboutReducer from "./reducers/aboutReducer";

const rootReducer = combineReducers({
    about: aboutReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore
