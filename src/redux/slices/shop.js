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
            let product = { ...state.allProducts.find(prod => prod.id === action.payload) };
            let cartProduct = state.cartProducts.find(prod => prod.id === action.payload);
            if (product.qty === 1) {
                state.allProducts = state.allProducts.filter(prod => prod.id !== action.payload)
            } else {
                state.allProducts = state.allProducts.map(prod => {
                    if (prod.id === action.payload) {
                        return {
                            ...prod,
                            qty: prod.qty - 1
                        }
                    }
                    return prod;
                })
            }
            if (cartProduct) {
                state.cartProducts = state.cartProducts.map(prod => {
                    if (prod.id === action.payload) {
                        return {
                            ...prod,
                            qty: prod.qty + 1
                        }
                    }
                    return prod;
                })
            } else {
                product.qty = 1;
                state.cartProducts = [
                    product,
                    ...state.cartProducts
                ]
            }
        },
        incCartItem: (state, action) => {
            let product = state.allProducts.find(prod => prod.id === action.payload);
            if (!product) return;
            if (product.qty === 1) {
                state.allProducts = state.allProducts.filter(prod => prod.id !== action.payload)
            } else {
                state.allProducts = state.allProducts.map(prod => {
                    if (prod.id === action.payload) {
                        return {
                            ...prod,
                            qty: prod.qty - 1
                        }
                    }
                    return prod;
                })
            }
            state.cartProducts = state.cartProducts.map(prod => {
                if (prod.id === action.payload) {
                    return {
                        ...prod,
                        qty: prod.qty + 1
                    }
                }
                return prod;
            });
        },
        decCartItem: (state, action) => {
            let product = state.allProducts.find(prod => prod.id === action.payload);
            let cartProduct = state.cartProducts.find(prod => prod.id === action.payload);
            if (!product) {
                state.allProducts = [
                    {
                        ...cartProduct,
                        qty: 1
                    },
                    ...state.allProducts
                ]
            } else {
                state.allProducts = state.allProducts.map(prod => {
                    if (prod.id === action.payload) {
                        return {
                            ...prod,
                            qty: prod.qty + 1
                        }
                    }
                    return prod;
                })
            }
            if (cartProduct.qty === 1) {
                state.cartProducts = state.cartProducts.filter(prod => prod.id !== action.payload)
            } else {
                state.cartProducts = state.cartProducts.map(prod => {
                    if (prod.id === action.payload) {
                        return {
                            ...prod,
                            qty: prod.qty - 1
                        }
                    }
                    return prod;
                })
            }
        }
    },
});

// this is for dispatch
export const shopActions = shopSlice.actions;

// this is for configureStore
export default shopSlice.reducer;
