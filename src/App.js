import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="app-container">
      
      {/* <header className="app-header">
        Lending books
      </header> */}

      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
