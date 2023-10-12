import { useAuth } from '../components/auth/auth-context';

interface PrivatePageProps {}

const Home: React.FC<PrivatePageProps> = ({}) => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Home;
