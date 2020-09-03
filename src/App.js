import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

// import MainNavigation from './components/Navigation/MainNavigation';
import Navbar from './components/Navigation/Navbar';
import SidebarData from './components/Navigation/SidebarData'

import MainPage from './pages/MainPage';
import UserActivities from './pages/UserActivities';
import UserDashboard from './pages/UserDashboard';
import ScreenMonitoring from './pages/ScreenMonitoring';
import Network from './pages/Network';
import ActiveProcesses from './pages/ActiveProcesses';
import FileSystem from './pages/FileSystem';
import SystemActivities from './pages/SystemActivities';
import SystemDashboard from './pages/SystemDashboard';
import SystemLogs from './pages/SystemLogs';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact>
        <MainPage />
      </Route>
      <Switch>
        <Route path='/useractivities' exact>
          <UserActivities />
        </Route>
        <Route path='/userdashboard' exact>
          <UserDashboard />
        </Route>
        <Route path='/screenmonitoring' exact>
          <ScreenMonitoring />
        </Route>
        <Route path='/network' exact>
          <Network />
        </Route>
        <Route path='/activeprocesses' exact>
          <ActiveProcesses />
        </Route>
        <Route path='/filesystems' exact>
          <FileSystem />
        </Route>
        <Route path='/systemactivities' exact>
          <SystemActivities />
        </Route>
        <Route path='/systemdashboard' exact>
          <SystemDashboard />
        </Route>
        <Route path='/systemlogs' exact>
          <SystemLogs />
        </Route>
        <Redirect to='/' />

      </Switch>
    </Router>

  );
};

export default App;
