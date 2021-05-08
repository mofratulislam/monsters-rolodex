import { createSlice } from '@reduxjs/toolkit';

const searchFieldSlice = createSlice({
    name: 'searchField',
    initialState: {
        searchField: '',
    },
    reducers: {
        changeSearchField: (state, action) => ({
            ...state,
            searchField: action.payload,
        }),
    },
});

export const { changeSearchField } = searchFieldSlice.actions;

export default searchFieldSlice.reducer;
