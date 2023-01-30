import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ArticlesState, IArticle } from '../../types/articleTypes';
import { fetchArticles } from '../actionCreators/articles';
import { filterArticlesBySearchedWords } from '../../utils/filterArticles';

const initialState: ArticlesState = {
	articles: [],
	filteredArticles: [],
	isLoading: false,
	error: '',
};

export const articlesSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		filterArticles(state, action: PayloadAction<string[]>) {
			state.filteredArticles = filterArticlesBySearchedWords(
				state,
				action.payload
			);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticles.pending.type, (state) => {
				state.isLoading = true;
			})
			.addCase(
				fetchArticles.fulfilled.type,
				(state, action: PayloadAction<IArticle[]>) => {
					state.articles = action.payload;
					state.filteredArticles = action.payload;
					state.isLoading = false;
					state.error = '';
				}
			)
			.addCase(
				fetchArticles.rejected.type,
				(state, action: PayloadAction<string>) => {
					state.error = action.payload;
					state.isLoading = false;
				}
			);
	},
});

export default articlesSlice.reducer;
