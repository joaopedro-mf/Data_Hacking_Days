import React from 'react';
import { Router } from "react-router-dom";
import './App.scss';

import History from '../../history';
import Routes from "../../routes";

import { AuthProvider } from '../../context/AuthContext';

const App = () => (
  <div className='App' data-testid='app'>
    <AuthProvider>
      <Router history={History}>
        <Routes />
      </Router>
    </AuthProvider>
  </div>
);

export default App;
