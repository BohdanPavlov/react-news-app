import * as ArticlesActionCreators from './articles';
import * as SelectedArticleActionCreators from './selectedArticle';
import { articlesSlice } from '../reducers/articlesSlice';

const ActionCreators = {
	...ArticlesActionCreators,
	...articlesSlice.actions,
	...SelectedArticleActionCreators,
};

export default ActionCreators;
