import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { RootStateType, DispathType } from '../store';

export const useAppDispatch = () => useDispatch<DispathType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
