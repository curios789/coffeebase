import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    shopsArray: [],
    isLoading: true,
    errMsg: ""
}
// FETCH FROM LOCAL SERVER - THIS WILL BE CHANGED AFTER SETTING UP MONGO AND EXPRESS
export const fetchShops = createAsyncThunk(
    'shops/fetchShops',
    async () => {
        const response = await fetch('http://localhost:3001/SHOPS');
        if (!response.ok) {
            return Promise.reject('Unable to Fetch: ' + response.errMsg);
        }
        const data = await response.json();
        return data;
    }
);

const shopSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchShops.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchShops.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.shopsArray = action.payload;
        },
        [fetchShops.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const shopsReducer = shopSlice.reducer;

export const selectShopById = (shopId) => (state) => {
    return (state.shops.shopsArray.filter(
        (shop) => shop.id === parseInt(shopId)
    ));
};

export const selectShopsByCoffeeId = (coffeeId) => (state) => {
    return (state.shops.shopsArray.filter(
        (shop) => shop.brewing.includes(parseInt(coffeeId))
    ))
}
export const selectAllShops = (state) => {
    return state.shops.shopsArray;
}