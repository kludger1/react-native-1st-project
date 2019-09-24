import {LOGIN, LOGOUT} from "./types"

const loginUser = (name) => {
    return {
        type: LOGIN,
        payload: {
            name
        }

    }
};

const loginOut = () => {
    return {
        type: LOGOUT,
        payload: {
            name: ''
        }

    }
};

export {loginUser, loginOut}
