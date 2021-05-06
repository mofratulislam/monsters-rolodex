/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMonsters = createAsyncThunk('users/fetchMonsters', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = response.json();
    return data;
});

export const monstersSlice = createSlice({
    name: 'monsters',
    initialState: {
        monstersProfiles: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchMonsters.fulfilled]: (state) => ({
            ...state,
            isLoading: true,
        }),
        [fetchMonsters.fulfilled]: (state, action) => ({
            ...state,
            isLoading: false,
            monstersProfiles: action.payload,
        }),
        [fetchMonsters.rejected]: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.error,
        }),
    },
});

export const { monstersLoading, monstersReceived } = monstersSlice.actions;

// export const fetchMonsters = () => (dispatch) => {
//     dispatch(monstersLoading(true));
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((res) => res.json())
//         .then((data) => dispatch(monstersReceived(data)));
// };

// Action creators are generated for each case reducer function

export default monstersSlice.reducer;
