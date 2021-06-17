import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Header from './components/header';

function App() {
  return (
    <div className="app-container">

      {/* <Header /> */}

      <div className="app-content">
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </div>

    </div>
  );
}

export default App;
