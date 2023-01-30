import { createAsyncThunk } from '@reduxjs/toolkit';

import { $host } from '../../http';
import { IArticle } from '../../types/articleTypes';

export const fetchArticles = createAsyncThunk(
	'articles/fetchArticles',
	async (_, thunkAPI) => {
		try {
			const res = await $host.get<IArticle[]>('articles', {
				params: {
					_limit: 100,
				},
			});
			return res.data;
		} catch (e: any) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
