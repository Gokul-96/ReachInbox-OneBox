import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import Onebox from './components/Onebox/Onebox';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/onebox" element={<Onebox />} />
      </Routes>
    </Router>
  );
};

export default App;