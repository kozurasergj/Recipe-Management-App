import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { RootStateType, DispathType } from '../store';

export const useAppDispath = () => useDispatch<DispathType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
