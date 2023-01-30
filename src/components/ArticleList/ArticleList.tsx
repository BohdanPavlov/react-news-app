import { FC } from 'react';
import { Grid } from '@mui/material';

import ArticleCard from '../ArticleCard/ArticleCard';
import { useAppSelector } from '../../hooks/redux';

const ArticleList: FC = () => {
	const filteredArticles = useAppSelector(
		(state) => state.articles.filteredArticles
	);

	return (
		<Grid
			container
			columns={{ xs: 4, sm: 8, md: 12 }}
			sx={{ margin: '20px auto' }}
			rowGap={5}
		>
			{filteredArticles?.map((article) => (
				<Grid
					item={true}
					xs={2}
					sm={4}
					md={4}
					key={article.id}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<ArticleCard article={article} />
				</Grid>
			))}
		</Grid>
	);
};

export default ArticleList;
