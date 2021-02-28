import {BrowserRouter as Router} from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import { useRoutes } from './routes';

import 'materialize-css';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/navbar/Navbar';
import { Loader } from './components/loader/Loader';

function App() {

  const {login, logout, userId, token, ready} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      login, logout, userId, token, isAuthenticated
    }}>
      <Router>
        { isAuthenticated && <Navbar /> }
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
