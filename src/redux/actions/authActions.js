import {LOGIN, LOGOUT} from "./types"

const loginUser = (name) => {
    return {
        type: LOGIN,
        payload: {
           name: name
        }

    }
};

const logOutUser = () => {
    return {
        type: LOGOUT,
        payload: {
            name: ''
        }

    }
};

export {loginUser, logOutUser}
