import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    coffeesArray: [],
    isLoading: true,
    errMsg: ""
}

export const fetchCoffees = createAsyncThunk(
    'coffees/fetchCoffees',
    async () => {
        const response = await fetch('http://localhost:3001/COFFEES');
        if (!response.ok) {
            return Promise.reject('Unable to Fetch: ' + response.errMsg);
        }
        const data = await response.json();
        return data;
    }
);

const coffeeSlice = createSlice({
    name: 'coffees',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCoffees.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCoffees.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.coffeesArray = action.payload;
        },
        [fetchCoffees.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
})

export const coffeeReducer = coffeeSlice.reducer;

export const selectAllCoffees = (state) => {
    return state.coffees.coffeesArray;
}
export const selectCoffeeById = (id) => (state) => {
    return state.coffees.coffeesArray.find(
        (coffee) => coffee.id === parseInt(id)
    );
};