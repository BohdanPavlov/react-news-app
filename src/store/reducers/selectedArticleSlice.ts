import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IArticle } from '../../types/articleTypes';
import { fetchArticleById } from '../actionCreators/selectedArticle';
import { SelectedArticleState } from '../../types/selectedArticleTypes';

const initialState: SelectedArticleState = {
	selectedArticle: null,
	isLoading: false,
	error: '',
};

export const selectedArticleSlice = createSlice({
	name: 'selectedArticle',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleById.pending.type, (state) => {
				state.isLoading = true;
			})
			.addCase(
				fetchArticleById.fulfilled.type,
				(state, action: PayloadAction<IArticle>) => {
					state.selectedArticle = action.payload;
					state.isLoading = false;
					state.error = '';
				}
			)
			.addCase(
				fetchArticleById.rejected.type,
				(state, action: PayloadAction<string>) => {
					state.error = action.payload;
					state.isLoading = false;
				}
			);
	},
});

export default selectedArticleSlice.reducer;
