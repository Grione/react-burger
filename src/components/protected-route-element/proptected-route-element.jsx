import { Navigate, useLocation } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';

export function ProtectedRouteElement({ element, anonym = false }) {
  const isLogged = getCookie('accessToken');
  const location = useLocation();
  const from = location.state?.from || "/";

  console.log('from',from);
  console.log('isLogged',isLogged);

  if (anonym && isLogged) {
    return <Navigate to={from} />
  }

  if (!anonym && !isLogged) {
    return <Navigate to='/login' state={{ from: location }} />
  }

  return element;
}