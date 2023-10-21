import { combineReducers } from 'redux';
import authReducer from './slices/authorization';
import artReducer from './slices/articles';
import lessonsReducer from './slices/lessons';
import hwReducer from './slices/homeworks';
import { articlesApi } from './articlesApi';

const rootReducer = combineReducers({
    [articlesApi]: articlesApi.reducer,
    authorization: authReducer,
    articles: artReducer,
    lessons: lessonsReducer,
    homeworks: hwReducer,
});

export default rootReducer;
