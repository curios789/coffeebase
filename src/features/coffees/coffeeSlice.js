import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    coffeesArray: [],
    selectedCoffee: {},
    isLoading: true,
    errMsg: ""
}
// FETCH FROM LOCAL SERVER - THIS WILL BE CHANGED AFTER SETTING UP MONGO AND EXPRESS
export const fetchCoffees = createAsyncThunk(
    'coffees/fetchCoffees',
    async (coffeeId) => {
        let url = "http://localhost:3000/coffees"
        if (coffeeId) {
            url = "http://localhost:3000/coffees/" + coffeeId;
        }
        const response = await fetch(url);
        if (!response.ok) {
            return Promise.reject('Unable to Fetch: ' + response.errMsg);
        }
        const data = await response.json();
        return data;
    }
);

export const fetchOneCoffee = createAsyncThunk(
    'coffees/fetchOneCoffee',
    async (coffeeId) => {
        const response = await fetch('http://localhost:3000/coffees/' + coffeeId);
        if (!response.ok) {
            return Promise.reject('Unable to Fetch:' + response.errMsg);
        }
        const data = await response.json();
        return data;
    });

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
        },
        [fetchOneCoffee.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.selectedCoffee = action.payload;
        }
    }
})

export const coffeeReducer = coffeeSlice.reducer;

// DISPLAY ALL COFFEES
export const selectAllCoffees = (state) => {
    return state.coffees.coffeesArray;
}

// DISPLAY A SPECIFIC COFFEE
export const selectCoffeeById = (id) => (state) => {
    return (state.coffees.coffeesArray.find(
        (coffee) => coffee._id === id
    ));
};

export const selectCoffeesByShop = (brewing) => (state) => {
    console.log("TEST CASE - BREWING")
    console.log(brewing);
    return state.coffees.coffeesArray.filter(
        (coffee) => brewing.includes(coffee._id)
    )
}
// DISPLAY COFFEES BY GROWING REGION
export const selectCoffeeByRegion = (region) => (state) => {
    return state.coffees.coffeesArray.filter(
        (coffee) => coffee.region === region
    );
}
export const selectCoffeeByUserId = (userId) => (state) => {
    return state.coffees.coffeesArray.filter(
        (coffee) => coffee.user === userId
    );
}
export const selectCoffeesByAttribute = (body, acidity, flavor) => (state) => {
    // SEARCH FUNCTION TO BE WRITTEN.
}