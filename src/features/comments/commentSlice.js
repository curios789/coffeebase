import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    commentsArray: [],
    isLoading: true,
    errMsg: ""
}
// FETCH FROM LOCAL SERVER - THIS WILL BE CHANGED AFTER SETTING UP MONGO AND EXPRESS
export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch('http://localhost:3001/COMMENTS');
        if (!response.ok) {
            return Promise.reject('Unable to Fetch: ' + response.errMsg);
        }
        const data = await response.json();
        return data;
    }
);

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.commentsArray = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const commentReducer = commentSlice.reducer;

export const selectCommentsByCoffeeId = (coffee_id) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.coffee_id === parseInt(coffee_id)
    );
}

export const selectCommentbyId = (id) => (state) => {
    return state.comments.commentsArray.find((comment) => comment.id === parseInt(id));
}