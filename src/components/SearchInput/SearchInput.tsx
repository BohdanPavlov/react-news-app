import { ChangeEvent, FC, useMemo, useState } from 'react';
import { Card } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';

import { useAction } from '../../hooks/redux';

import './SearchInput.scss';

const SearchInput: FC = () => {
	const [value, setValue] = useState<string>('');
	const { filterArticles } = useAction();

	const onValueChange = useMemo(
		() =>
			debounce((searchedWords: string[]) => filterArticles(searchedWords), 300),
		[]
	);

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		setValue(() => e.target.value);
		const searchedWords = e.target.value.trim().split(' ');
		onValueChange(searchedWords);
	}

	return (
		<Card className='search'>
			<SearchIcon />
			<input
				type='text'
				className='search__input'
				placeholder='Search here...'
				value={value}
				onChange={handleInputChange}
			/>
		</Card>
	);
};

export default SearchInput;
