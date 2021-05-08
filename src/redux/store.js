import { configureStore } from '@reduxjs/toolkit';
import monstersReducer from './monsters/monstersSlice';
import searchFieldReducer from './searchField/searchFieldSlice';

export default configureStore({
    reducer: {
        monsters: monstersReducer,
        searchField: searchFieldReducer,
    },
});
