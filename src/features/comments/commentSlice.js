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

export const postComment = createAsyncThunk(
    'comments/postComment',
    async (comment, { dispatch }) => {
        const response = await fetch('http://localhost:3001/COMMENTS', { method: 'POST', body: JSON.stringify(comment), headers: { 'Content-Type': 'application/json' } });
        if (!response.ok) {
            return Promise.reject('Unable to post, status:' + response.status);
        }
        const data = await response.json();
        dispatch(addComment(data));
    }
)
const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log('addComment action.payload', action.payload);
            console.log('addComment state.commentsArray', state.commentsArray);
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            };
            state.commentsArray.push(newComment);
        }
    },
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
        },
        [postComment.rejected]: (state, action) => {
            alert('Your comment could not be posted\nError: ' + action.error ? action.error.message : 'Fetch failed.')
        }
    }
});

export const commentReducer = commentSlice.reducer;
export const { addComment } = commentSlice.actions;

export const selectCommentsByCoffeeId = (coffee_id) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.coffee_id === parseInt(coffee_id)
    );
}
export const selectCommentsByShopId = (shop_id) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.shop_id === parseInt(shop_id)
    );
}
export const selectCommentbyId = (id) => (state) => {
    return state.comments.commentsArray.find((comment) => comment.id === parseInt(id));
}