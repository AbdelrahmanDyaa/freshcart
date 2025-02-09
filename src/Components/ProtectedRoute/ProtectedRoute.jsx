import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('userToken');

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
