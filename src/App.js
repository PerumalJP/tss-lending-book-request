import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Header from './components/header';
import NavBar from './components/navBar';
import UserType from './components/userType';

function App() {
  return (
    <div className="app-container">

      <Header />

      <div className="app-content">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/userType" component={UserType} />
          </Switch>
        </Router>
      </div>

    </div>
  );
}

export default App;
