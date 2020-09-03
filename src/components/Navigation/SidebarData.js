import React from 'react';

import UserActivities from '../../images/User-activites.png';
import UserDashboard from '../../images/user-dashboard.png';
import ScreenMonitoring from '../../images/Screen-monitoring.png';
import Network from '../../images/Network.png';
import ActiveProcesses from '../../images/Active-processes.png';
import FileSystems from '../../images/File-System.png';
import SystemActivities from '../../images/System-Activity.png';
import SystemDashboard from '../../images/System-Dashabord.png';
import SystemLogs from '../../images/System-Logs.png';


export const SidebarData = [
    {
        title: 'User Activities',
        path: '/useractivities',
        icon: <img src ={UserActivities} alt="" style ={{maxWidth:"2rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
    {
        title: 'User Dashboard',
        path: '/userdashboard',
        icon: <img src ={UserDashboard} alt="" style ={{maxWidth:"2rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
    {
        title: 'Screen Monitoring',
        path: '/screenmonitoring',
        icon: <img src ={ScreenMonitoring} alt="" 
        style ={{maxWidth:"2rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
    {
        title: 'Network',
        path: '/network',
        icon: <img src ={Network} alt="" 
        style ={{maxWidth:"2rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
    {
        title: 'Active Processes',
        path: '/activeprocesses',
        icon: <img src ={ActiveProcesses} alt="" 
        style ={{maxWidth:"2rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
    {
        title: 'File Systems',
        path: '/filesystems',
        icon: <img src ={FileSystems} alt="" style ={{maxWidth:"2rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
    {
        title: 'System Activities',
        path: '/systemactivities',
        icon: <img src ={SystemActivities} alt="" 
        style ={{maxWidth:"2rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
    {
        title: 'System Dashboard',
        path: '/systemdashboard',
        icon: <img src ={SystemDashboard} alt="" 
        style ={{maxWidth:"2rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
    {
        title: 'System Logs',
        path: '/systemlogs',
        icon: <img src ={SystemLogs} alt="" 
        style ={{maxWidth:"2rem", marginLeft: "1rem", marginRight:"1rem"}}/>,
        className: 'nav-text'
    },
]