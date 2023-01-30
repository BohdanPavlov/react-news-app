import { IArticle } from './articleTypes';

export interface SelectedArticleState {
	selectedArticle: IArticle | null;
	isLoading: boolean;
	error: string;
}

export interface ViewProps {
	article: IArticle;
}
