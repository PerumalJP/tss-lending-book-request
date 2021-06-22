import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Header from './components/header';
import NavBar from './components/navBar';
import UserType from './components/userType';
import PrivateRoute from './components/auth/privateRoute';
import useAuth from './customStatus';
import { useState } from 'react';

import { AppContext } from './appContext';

function App() {

  const isLoggedIn = useAuth();
  const [user, setUser] = useState({ isLoggedIn });

  return (
    <div className="app-container">
      <AppContext.Provider value={{ user, setUser }}>

        {user.isLoggedIn && <Header />}

        <div className="app-content">
          <Router>

            {user.isLoggedIn && <NavBar />}

            <Switch>

              <Route exact path="/login" render={({ location }) =>
                user.isLoggedIn ? <Redirect to={{ pathname: '/dashboard', state: { from: location } }} /> : <Login />
              } />

              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>

              <PrivateRoute path="/userType">
                <UserType />
              </PrivateRoute>

              <Route path="*">
                <Redirect to="/dashboard" />
              </Route>

            </Switch>

          </Router>
        </div>

      </AppContext.Provider>
    </div>
  );
}

export default App;
