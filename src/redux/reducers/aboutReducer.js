import SHOW_BTN_CLICKED from "../actions/types";

const initialState = {
    show: true
};

const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_BTN_CLICKED:
            return {
                ...state,
                show: false
            };
        default:
            return state;
    }
};

export default aboutReducer
