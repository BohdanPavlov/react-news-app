import { combineReducers, configureStore } from '@reduxjs/toolkit';

import articlesReducer from './reducers/articlesSlice';
import selectedArticleReducer from './reducers/selectedArticleSlice';

const rootReducer = combineReducers({
	articles: articlesReducer,
	selectedArticle: selectedArticleReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		devTools: true,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
