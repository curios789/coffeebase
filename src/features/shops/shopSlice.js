import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    shopsArray: [],
    selectedShop: {},
    isLoading: true,
    errMsg: ""
}
// FETCH FROM LOCAL SERVER - THIS WILL BE CHANGED AFTER SETTING UP MONGO AND EXPRESS
export const fetchShops = createAsyncThunk(
    'shops/fetchShops',
    async () => {
        const response = await fetch('http://localhost:3000/shops');
        if (!response.ok) {
            return Promise.reject('Unable to Fetch: ' + response.errMsg);
        }
        const data = await response.json();
        return data;
    }
);

export const addShop = createAsyncThunk(
    'shops/addShop',
    async (values) => {
        const json_values = JSON.stringify(values);
        console.dir(json_values);
        const response = await fetch('http://localhost:3000/shops', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json_values
        });
        if (!response.ok) {
            return Promise.reject('Unable to Post: ' + response.errMsg);
        }
        const data = await response.json();
        return data;
    }
)

export const fetchOneShop = createAsyncThunk(
    'shops/fetchOneShop',
    async (shopId) => {
        const response = await fetch('http://localhost:3000/shops/' + shopId);
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
        },
        [fetchOneShop.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchOneShop.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.selectedShop = action.payload;
        },
        [fetchOneShop.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [addShop.pending]: (state) => {
            state.isLoading = true;
        },
        [addShop.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
        },
        [addShop.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Add failed';
        }
    }
});

export const shopsReducer = shopSlice.reducer;

export const selectShopById = (shopId) => (state) => {
    return (state.shops.shopsArray.find(
        (shop) => shop._id === shopId
    ));
};

export const selectShopsByCoffeeId = (coffeeId) => (state) => {
    return (state.shops.shopsArray.filter(
        (shop) => shop.brewing.includes(coffeeId)
    ))
}

export const selectShopsByUserId = (userId) => (state) => {
    return (state.shops.shopsArray.filter(
        (shop) => shop.user === userId
    ))
}
export const selectAllShops = (state) => {
    return state.shops.shopsArray;
}