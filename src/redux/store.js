import React from "react"
import { createStore, combineReducers } from 'redux'

import aboutReducer from "./reducers/aboutReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
    about: aboutReducer,
    userStatus: authReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore
