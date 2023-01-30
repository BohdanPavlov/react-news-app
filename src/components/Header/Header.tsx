import { FC } from 'react';

import SearchInput from '../SearchInput/SearchInput';
import Results from '../Results/Results';

import './Header.scss';

const Header: FC = () => {
	return (
		<div className='header'>
			<h4>Filter by keywords</h4>
			<SearchInput />
			<Results />
		</div>
	);
};

export default Header;
