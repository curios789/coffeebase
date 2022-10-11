import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
    errMsg: '',
    username: '',
    token: '',
    userId: '',
    admin: false
}

export const login = createAsyncThunk(
    'user/login',
    async (values) => {
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }
        )
        if (!response.ok) {
            return Promise.reject("Unable to fetch: " + response.errMsg);
        }
        const data = await response.json();
        return (data);
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [login.pending]: (state) => {
            state.isLoading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.username = action.meta.arg.username;
            state.userId = action.payload.user;
            state.token = action.payload.token;
            state.isLoading = false;
        },
        [login.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
})
export const tokenSelector = (state) => {
    return state.user.token;
}

export const userSelector = (state) => {
    console.log(state);
    return state.user.userId;
}
export const userReducer = userSlice.reducer;