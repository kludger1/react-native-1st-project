import {LOGIN, LOGOUT} from "./types"

const loginUser = (name) => {
    console.log('from auth action',name);
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
