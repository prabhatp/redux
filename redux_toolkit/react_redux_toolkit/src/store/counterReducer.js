import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    counter : 0,
}

export const counterReducer = createReducer(initialState, {
    increment: (state, action) => {
        state.counter = state.counter +1;
    },
    decrement: (state, action) => {
        state.counter = state.counter -1;
    }
});