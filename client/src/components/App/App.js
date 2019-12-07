import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRoute from '../Utils/AppRoute';
import './App.css';
//Routes
import Home from '../../routes/Home/Home';
import Devices from '../../routes/Devices/Devices';
import Dashboard from '../../routes/Dashboard/Dashboard';
import News from '../../routes/News/News';
import TabContainer from '../../routes/SignupLogin/SignupLogin';
import PublicOnlyRoute from '../Utils/PublicRouteOnly';
import PrivateRoute from '../Utils/PrivateRoute';
//Layouts
import MainLayout from '../../layouts/MainLayout/MainLayout';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <AppRoute exact path="/" component={Home} layout={MainLayout} />
          <AppRoute
            path="/devices-for-sale"
            component={Devices}
            layout={MainLayout}
          />
          <AppRoute path="/news" component={News} layout={MainLayout} />
          <PublicOnlyRoute
            exact
            path="/dashboard/auth"
            component={TabContainer}
            layout={DashboardLayout}
          />
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            layout={DashboardLayout}
          />
        </Switch>
      </div>
    </Router>
  );
}
