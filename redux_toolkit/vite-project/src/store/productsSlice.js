import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
const initialState = [];

export const STATUSES = Object.freeze(
    {
        IDLE: 'idle',
        ERROR: 'error',
        LOADING: 'loading'
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload
        // },

        // remove(state, action) {
        //     return state.filter((item) => (item.id !== action.payload))
        // },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = STATUSES.IDLE;
            state.data = action.payload;
        }).addCase(fetchProducts.rejected, (state, action) => {
            state.status = STATUSES.ERROR; 
        })
    }
});

console.log('cartSlice', productSlice)
console.log('cartSlice.reducer', productSlice.reducer);
export const {setProducts, setStatus, remove} = productSlice.actions;
export default productSlice.reducer;

// product/fetch: it can be any name
export const fetchProducts = createAsyncThunk('products/fetch', async() => {
    const res = await fetch('https://fakestoreapi.com/products').then(res => res.json())
    return res;
})
// Normal thunk code.
// export function fetchProducts() {
//     return async function (dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));

//         try {
//             const res = await fetch('https://fakestoreapi.com/products').then(res => res.json())
//             dispatch(setProducts(res));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.log('err', err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }