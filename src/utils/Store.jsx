import {configureStore} from '@reduxjs/toolkit'
import descriptionReducer from './StoreReducer'


const store = configureStore({
    reducer: {
        description: descriptionReducer,
    },
});

export default store;