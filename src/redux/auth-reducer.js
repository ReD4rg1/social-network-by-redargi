import {authAPI} from "../api/api";

const SET_USERS_DATA = 'SET-USERS-DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

export const setUsersData = (payload) => ({
    type: SET_USERS_DATA,
    payload: {
        userId: payload.data.id,
        email: payload.data.email,
        login: payload.data.login,
        isAuth: payload.isAuth,
    },
});

export const getAuth = () => {
    return (async (dispatch) => {
        let response = await authAPI.getAuth()
        if (response.resultCode === 0) {
            dispatch(setUsersData({data: response.data, isAuth: true}));
        } else {
            dispatch(setUsersData({data: response.data, isAuth: false}));
        }
    });
}

export const login = (props) => {
    return (async (dispatch) => {
        let response = await authAPI.login(props.values.email, props.values.password, props.values.rememberMe)
        if (response.resultCode === 0) {
            dispatch(getAuth());
            props.setSubmitting(false);
            props.resetForm();
        } else {
            props.setSubmitting(false);
            props.setStatus({
                messageEmail: response.messages[0],
                messagePassword: response.messages[1]
            });
        }
    });
}

export const logout = () => {
    return (async (dispatch) => {
        let response = await authAPI.logout()
        if (response.resultCode === 0) {
            dispatch(getAuth());
        }
    });
}

export default authReducer;