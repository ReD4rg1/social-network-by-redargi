import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UPDATE_NEW_FIND_USERS_TEXT = 'UPDATE-NEW-FIND-USERS-TEXT';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const IS_FOLLOWING_PROGRESS = 'IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [],
    newFindUsersText: 'Who are you?',
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const findUsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user
                }),
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }

        case IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(
                        id => id !== action.userId
                    )],
            }

        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
                totalUsersCount: action.totalUsersCount
            }

        case UPDATE_NEW_FIND_USERS_TEXT:
            return {...state, newFindUsersText: action.newText};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.newPage};

        default:
            return state;
    }
}

export const follow = (userId) => ({
    type: FOLLOW,
    userId: userId
});

export const setUsers = (data) => ({
    type: SET_USERS,
    users: data.items,
    totalUsersCount: data.totalCount,
});

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    newPage: page
});

export const updateNewFindUsersText = (text) => ({
    type: UPDATE_NEW_FIND_USERS_TEXT,
    newText: text
});

export const fetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
});

export const followingInProgress = (followingInProgress, userId) => ({
    type: IS_FOLLOWING_PROGRESS,
    followingInProgress: followingInProgress,
    userId: userId,
});

export const getUsers = (currentPage, pageSize) => {
    return (async (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(fetching(true));
        let response = await usersAPI.getUsers({
            currentPage: currentPage,
            pageSize: pageSize,
        })
        dispatch(setUsers(response));
        dispatch(fetching(false));
    });
}

export const followToggle = (userId, followedStatus) => {
    return (async (dispatch) => {
        dispatch(followingInProgress(true, userId));
        let response = await (!followedStatus
            ? usersAPI.followTo({userId})
            : usersAPI.unfollowTo({userId}))
        if (response.resultCode === 0) {
            dispatch(follow(userId));
            dispatch(followingInProgress(false))
        }
    });
}

export default findUsersReducer;