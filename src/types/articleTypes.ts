interface ILaunchesAndEvents {
	id: string;
	provider: string;
}

export interface IArticle {
	id: number;
	featured: boolean;
	title: string;
	url: string;
	imageUrl: string;
	newsSite: string;
	summary: string;
	publishedAt: string;
	launches: ILaunchesAndEvents[];
	events: ILaunchesAndEvents[];
}

export interface ArticlesState {
	articles: IArticle[];
	isLoading: boolean;
	error: string;
	filteredArticles: IArticle[];
}
