import { createAsyncThunk } from '@reduxjs/toolkit';

import { $host } from '../../http';
import { IArticle } from '../../types/articleTypes';

export const fetchArticleById = createAsyncThunk(
	'article/fetchSelectedArticle',
	async (id: string, thunkAPI) => {
		try {
			const res = await $host.get<IArticle>(`articles/${id}`);
			return res.data;
		} catch (e: any) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
