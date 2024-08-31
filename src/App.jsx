import React from 'react';
import { BrowserRouter as Router, Route, Route } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import './styles/login.css';

const App = () => {
  return (
    <Router>
      <Route>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/" render={() => <div>Home Page</div>} />
      </Route>
    </Router>
  );
};

export default App;