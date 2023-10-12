import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivateRoute from './components/layouts/private-route';
import Home from './pages/home';
import LoginPage from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
