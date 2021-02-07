import {BrowserRouter as Router} from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import { useRoutes } from './routes';

import 'materialize-css';
import { AuthContext } from './context/AuthContext';

function App() {

  const {login, logout, userId, token} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value={{
      login, logout, userId, token, isAuthenticated
    }}>
      <Router>
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
