import {SHOW_BTN_CLICKED} from "./types"

const toggleAbout = () => {
    return {
        type: SHOW_BTN_CLICKED,
        payload: {
            show: false
        }

    }
};

export default toggleAbout
