import {LOGIN, LOGOUT} from "../actions/types";

const initialState = {
    auth: false,
    name: ""
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                auth: true,
                name: action.payload.name
            };
        case LOGOUT:
            return {
                ...state,
                auth: false,
                name:action.payload.name
            };
        default:
            return state;
    }
};

export default authReducer
