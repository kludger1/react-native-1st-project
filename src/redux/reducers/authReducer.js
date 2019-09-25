import {LOGIN, LOGOUT} from "../actions/types";

const initialState = {
    logout: false,
    name: ""
};

const authReducer = (state = initialState, action) => {
    console.log('from auth reducer', state);
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                logout: true,
                name: state.name
            };
        case LOGOUT:
            return {
                ...state,
                logout: false,
                name: state.name
            };
        default:
            return state;
    }
};

export default authReducer
