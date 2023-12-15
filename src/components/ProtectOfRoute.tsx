import { Navigate } from 'react-router-dom';

interface IProtectRoute<T> {
  Element: (data: T) => JSX.Element;
  onlyLoggedIn?: boolean;
  data?: T;
}

export default function ProtectRoute<T>({ Element, onlyLoggedIn = false, data = undefined }: IProtectRoute<T>) {
  // const { loggedIn } = useCurrentUser();
  const loggedIn = true;

  return (onlyLoggedIn ? loggedIn : !loggedIn) ? (
    <Element {...(data as T & JSX.IntrinsicAttributes)} />
  ) : (
    <Navigate to="/" replace />
  );
}
