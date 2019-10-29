import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppRoute from '../Utils/AppRoute';
import './App.css';
import Home from '../../routes/Home/Home';
import Dashboard from '../../routes/Dashboard/Dashboard';
import MainLayout from '../../layouts/MainLayout/MainLayout';

export default function App() {
  return (
    <Router>
      <Switch>
        <AppRoute exact path="/" component={Home} layout={MainLayout} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
