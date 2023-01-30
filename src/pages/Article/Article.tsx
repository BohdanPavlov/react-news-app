import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useAction, useAppSelector } from '../../hooks/redux';
import Spinner from '../../components/Spinner/Spinner';
import { ViewProps } from '../../types/selectedArticleTypes';
import { HOMEPAGE_ROUTE } from '../../utils/constants';

import './Article.scss';

export const Article: FC = () => {
	const { selectedArticle, isLoading, error } = useAppSelector(
		(state) => state.selectedArticle
	);
	const { fetchArticleById } = useAction();
	const { id } = useParams();

	useEffect(() => {
		if (id != null) {
			fetchArticleById(id);
		}
	}, []);

	const loading = isLoading ? <Spinner /> : null;
	const errorMessage = error ? <div>{error}</div> : null;
	const content =
		!(isLoading || error) && selectedArticle ? (
			<View article={selectedArticle} />
		) : null;

	return (
		<div>
			{loading}
			{errorMessage}
			{content}
		</div>
	);
};

const View: FC<ViewProps> = ({ article: { imageUrl, title } }) => {
	const navigate = useNavigate();
	const paragraphs = [1, 2, 3, 4];

	return (
		<div className='article'>
			<div className='article__banner'>
				<img src={imageUrl} alt={title} />
			</div>
			<div className='article__body'>
				<Card className='article__description description'>
					<h2 className='description__title'>{title}</h2>
					<div className='description__text'>
						{paragraphs.map((num) => {
							return (
								<p key={num}>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Consectetur ducimus fugiat harum, quidem veniam voluptates
									voluptatibus. Beatae fuga incidunt laborum odio officia
									quisquam quo, recusandae repellat voluptatem voluptatum? At ea
									enim eveniet exercitationem fuga harum inventore ipsa nulla
									numquam. Consequuntur dicta dolorem eum, incidunt iure libero
									maiores nisi nobis praesentium quod repudiandae similique, ut.
									Architecto asperiores blanditiis consequatur cum dicta dolore,
									doloremque et inventore, itaque laboriosam nihil nulla numquam
									obcaecati possimus quae, quo quod rerum.
								</p>
							);
						})}
					</div>
				</Card>
				<div
					className='navigate'
					onClick={() => {
						navigate(HOMEPAGE_ROUTE);
					}}
				>
					<ArrowBackIcon />
					<p className='navigate__text'>Back to homepage</p>
				</div>
			</div>
		</div>
	);
};
