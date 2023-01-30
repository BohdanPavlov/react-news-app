import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { publicRoutes } from '../../routes';

export const AppRouter: FC = () => {
	return (
		<Routes>
			{publicRoutes.map(({ path, element }) => {
				return <Route key={path} path={path} element={element} />;
			})}
		</Routes>
	);
};
