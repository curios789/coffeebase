import { createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    isLoading: false,
    token: localStorage.getItem('token'),
    user: localStorage.getItem('username') ? JSON.parse(localStorage.getItem('username')) : null,
    errMsg: null
}

export const logIn = createAsyncThunk(
    'auth/login',
    async (username, password) => {
        const response = await fetch(baseUrl + 'users/login', {
            method: 'POST',
            body: JSON.stringify({ user: username, password: password })
        });
        if (!response.ok) {
            return Promise.reject('Fetch could not be completed: ' + response.errMsg);
        }
        const data = await (response.json);
        return data;
    }
)