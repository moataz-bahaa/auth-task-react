import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/auth-context';

interface PrivateRouteProps {
  children?: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthorized } = useAuth();

  return isAuthorized ? children : <Navigate to={'/login'} />;
};

export default PrivateRoute;
