import { FC, useEffect } from 'react';
import { Container } from '@mui/material';

import { useAction, useAppSelector } from '../../hooks/redux';
import Header from '../../components/Header/Header';
import ArticleList from '../../components/ArticleList/ArticleList';
import Spinner from '../../components/Spinner/Spinner';

export const Homepage: FC = () => {
	const { articles, isLoading, error } = useAppSelector(
		(state) => state.articles
	);
	const { fetchArticles } = useAction();

	useEffect(() => {
		if (articles.length === 0) {
			fetchArticles();
		}
	}, []);

	const loading = isLoading ? <Spinner /> : null;
	const errorMessage = error ? <div>{error}</div> : null;
	const content = !(isLoading || error) && articles ? <ArticleList /> : null;

	return (
		<Container>
			<Header />
			{loading}
			{errorMessage}
			{content}
		</Container>
	);
};
