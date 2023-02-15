import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function ProtectedRouteElement({ element }) {
  const { user } = useSelector(state => state.user)
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    setAuth(true)
  }, [user])

  if (!auth) { return null }

  return user ? element : <Navigate to="/login" replace/>;
}