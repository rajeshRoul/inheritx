import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        allProducts: [],
        cartProducts: [],
    },
    reducers: {
        addNewProduct: (state, action) => {
            state.allProducts = [action.payload, ...state.allProducts];
        },
        addToCart: (state, action) => {
            state.cartProducts = [
                state.allProducts.find(prod => prod.id === action.payload),
                ...state.cartProducts
            ]
            state.allProducts = state.allProducts.filter(prod => prod.id !== action.payload)
        }
    },
});

// this is for dispatch
export const shopActions = shopSlice.actions;

// this is for configureStore
export default shopSlice.reducer;
