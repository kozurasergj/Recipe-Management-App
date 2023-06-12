import { useAppSelector } from './useRedux';

export const useAuthentication = () => {
  const { email, token, id } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id
  }
}
