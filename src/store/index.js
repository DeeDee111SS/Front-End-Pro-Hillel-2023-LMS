import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { articlesApi } from './articlesApi';


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articlesApi.middleware),
});

export default store;