import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const CounterSlice = createSlice({
    name: 'Count',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count = state.count + 5;
        },
        decrement: (state, action) => {
            if (state.count > 0) {
                state.count = state.count - 5;
            }
        }
    }
})

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;