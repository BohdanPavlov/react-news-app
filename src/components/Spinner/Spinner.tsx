import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

const Spinner: FC = () => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<CircularProgress size={150} />
		</Box>
	);
};

export default Spinner;
