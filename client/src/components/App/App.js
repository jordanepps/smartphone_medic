import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppRoute from '../Utils/AppRoute';
import './App.css';
//Routes
import Home from '../../routes/Home/Home';
import Devices from '../../routes/Devices/Devices';
import Dashboard from '../../routes/Dashboard/Dashboard';
import News from '../../routes/News/News';
//Layouts
import MainLayout from '../../layouts/MainLayout/MainLayout';

export default function App() {
  return (
    <Router>
      <Switch>
        <AppRoute exact path="/" component={Home} layout={MainLayout} />
        <AppRoute
          path="/devices-for-sale"
          component={Devices}
          layout={MainLayout}
        />
        <AppRoute path="/news" component={News} layout={MainLayout} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
