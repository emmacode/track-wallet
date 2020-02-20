import axios from "axios";

import apiClient from "../store/apiClient";

class AllService {
    signinUser = body => {
        return new Promise((resolve, reject) => {
            apiClient("/login", { body })
                .then(res => {
                    if (res.status === 200) {
                        this.setToken(res.data.token)
                    }
                    return resolve(res)
                })
                .catch(error => {
                    reject(error.response)
                })
        })
    }

    signupUser = body => {
        return new Promise((resolve, reject) => {
            apiClient("/signup", { body })
                .then(res => {
                    console.log(res, "hey i am signupUser")
                    return resolve(res);
                })
                .catch(error => {
                    console.log(error, "hey error")
                    reject(error.response)
                })
        })
    }

    isAuthenticated() {
        const token = localStorage.getItem("token");
        if (token) return this.isAuthTokenValid(token);
        return false;
    }

    isAuthTokenValid = access_token => {
        if (!access_token) {
            return false;
        }
        this.setToken(access_token);
        return true;
    };

    setToken = token => {
        if (token) {
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("persist:root");
            delete axios.defaults.headers.common["Authorization"];
        }
    };

    getToken() {
        return localStorage.getItem("token");
    }

    removeToken() {
        localStorage.removeItem("token");
    }
}

const instance = new AllService();

export default instance;