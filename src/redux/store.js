import { configureStore } from '@reduxjs/toolkit';
import monstersReducer from './monsters/monstersSlice';

export default configureStore({
    reducer: {
        monsters: monstersReducer,
    },
});
