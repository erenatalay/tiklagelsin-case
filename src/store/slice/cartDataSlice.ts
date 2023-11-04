import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICartDataSlice {
    count: number
    total: number
    regularTotal: number
}
const initialState: ICartDataSlice = {
    count: 0,
    total: 0,
    regularTotal: 0,
};
const slice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCount: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
        setTotal: (state, action: PayloadAction<number>) => {
            state.total = action.payload;
        },
        setRegularTotal: (state, action: PayloadAction<number>) => {
            state.regularTotal = action.payload;
        },
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },

    },
});
export default {
    ...slice.actions,
    reducer: slice.reducer,
};
