import { ARTICLE_ROUTE, HOMEPAGE_ROUTE } from './utils/constants';
import { Homepage } from './pages/Homepage/Homepage';
import { Article } from './pages/Article/Article';

export const publicRoutes = [
	{
		path: HOMEPAGE_ROUTE,
		element: <Homepage />,
	},
	{
		path: ARTICLE_ROUTE,
		element: <Article />,
	},
];
