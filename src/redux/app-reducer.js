import {getAuth} from "./auth-reducer";

const INIT_SUCCESS = 'INIT-SUCCESS'

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INIT_SUCCESS:
            return {
                ...state,
                initialized: action.initialized,
            }

        default:
            return state;
    }
}

export const initialized = (props) => ({
    type: INIT_SUCCESS,
    initialized: props,
});

export const initialize = () => {
    return ((dispatch) => {
        dispatch(getAuth()).then(() => dispatch(initialized(true)));
    });
}

export default appReducer;