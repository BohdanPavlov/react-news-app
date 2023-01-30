import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from '../store/store';
import ActionCreators from '../store/actionCreators';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>();

export const useAction = () => {
	const dispatch = useAppDispatch();
	return bindActionCreators(ActionCreators, dispatch);
};
