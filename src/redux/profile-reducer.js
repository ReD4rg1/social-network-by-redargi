import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    postsData: [/*
        {id: 1, name: "D4Rg1", message: "Hey, do you like a...?", likesCount: "117"},
        {
            id: 2, name: "D4Rg1",
            message: "",
            likesCount: "153"
        },
    */],
    profileData: null/*{
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        userId: 1,
        photos: {
            small: null,
            large: null
        }
    }*/,
    newPostText: 'post text',
    isFetching: true,
    status: null,
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== '') {
                return {
                    ...state,
                    newPostText: '',
                    postsData: [...state.postsData, {
                        id: 3,
                        message: state.newPostText,
                        likesCount: 0,
                    }]
                }
            }
            return state;

        case SET_USER_PROFILE:
            return {
                ...state,
                profileData: action.data,
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }

        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});

export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const setUserProfile = (data) => ({
    type: SET_USER_PROFILE,
    data: data
});

export const setStatus = (statusText) => ({
    type: SET_STATUS,
    status: statusText
});

export const fetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
});

export const getProfileData = (userId) => {
    return (async (dispatch) => {
        let response = await profileAPI.getProfileData(userId)
        dispatch(setUserProfile(response));
        dispatch(fetching(false));
    });
}

export const getStatus = (userId) => {
    return (async (dispatch) => {
        dispatch(fetching(true));
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response));
        dispatch(fetching(false));
    });
}

export const updateStatus = (status) => {
    return (async (dispatch) => {
        dispatch(fetching(true));
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
        dispatch(fetching(false));
    });
}

export default profileReducer;