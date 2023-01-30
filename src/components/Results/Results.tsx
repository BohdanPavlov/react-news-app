import { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';

import './Results.scss';

const Results: FC = () => {
	const filteredArticles = useAppSelector(
		(state) => state.articles.filteredArticles
	);
	return (
		<div className='results'>
			<p className='results__text'>Results: {filteredArticles.length}</p>
			<hr />
		</div>
	);
};

export default Results;
