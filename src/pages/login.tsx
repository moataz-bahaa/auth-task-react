import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/auth/auth-context';
import { useFormData } from '../hooks/use-form-data';
import { User } from '../types';

const dummyUser: User = {
  email: 'moatazbahaa20@gmail.com',
  username: 'Moataz',
};

interface LoginInput {
  email: string;
  password: string;
}

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useFormData<LoginInput>({
    email: '',
    password: '',
  });

  const onSubmit = (_: LoginInput) => {
    // do backend api call
    login(dummyUser, 'token');
    navigate('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register('email')} />
        <br />
        <br />
        <input type='password' {...register('password')} />
        <br />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
