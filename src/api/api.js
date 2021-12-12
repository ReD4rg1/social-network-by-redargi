import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '67e9bc59-d756-4699-841e-f4005ff4fe7c'},
})

export const usersAPI = {

    getUsers(props) {
        return (
            instance.get(`users?page=${props.currentPage}&count=${props.pageSize}`)
                .then(response => response.data)
        )
    },

    followTo(props) {
        return (
                instance.post(`follow/${props.userId}`)
                    .then(response => response.data)
        )
    },

    unfollowTo(props) {
        return (
            instance.delete(`follow/${props.userId}`)
                .then(response => response.data)
        )
    },

}

export const profileAPI = {
    getProfileData(userId) {
        return (
            instance.get(`profile/${userId}`)
                .then(response => response.data)
        )
    },

    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)
                .then(response => response.data)
        )
    },

    updateStatus(status) {
        return (
            instance.put('profile/status', {status: status})
                .then(response => response.data)
        )
    },
}

export const authAPI = {

    getAuth() {
        return (
            instance.get(`auth/me`)
                .then(response => response.data)
        )
    },

    login(email, password, rememberMe) {
        return (
            instance.post(`auth/login`, {email, password, rememberMe})
                .then(response => response.data)
        )
    },

    logout() {
        return (
            instance.delete(`auth/login`)
                .then(response => response.data)
        )
    },
}
