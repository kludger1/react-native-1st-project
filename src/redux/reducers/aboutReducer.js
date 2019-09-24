import SHOW_BTN_CLICKED from "../actions/types";

const initialState = {
    show: false
};

const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_BTN_CLICKED:
            return {
                ...state,
                show: state.show === false
            };
        default:
            return state;
    }
};

export default aboutReducer
