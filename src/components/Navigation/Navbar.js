import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css'

import LogoIcon from '../../images/fussion-icon.png';
import BigLogoIcon from '../../images/logo.png';

import LogoutIcon from '../../images/Logout.png';
import ChatIcon from '../../images/chat.png';
import HomeIcon from '../../images/d-home.png';
import NotificationIcon from '../../images/notification.png';
import BackIcon from '../../images/back.png';



const Navbar = () => {
    const [sidebar, setsidebar] = useState(false)

    const showSidebar = () => setsidebar(true)

    const closeSidebar = () => setsidebar(false)



    return (
        <>
            <div className='right-icons'>
                <Link to="#" className='menu-bar'>
                    <img src={BackIcon} style={{maxWidth:"1.5rem", marginRight:"30px"}} alt="Home" />
                    <img src={NotificationIcon} style={{maxWidth:"1.5rem", marginRight:"30px"}} alt="Home" />
                    <img src={HomeIcon} style={{maxWidth:"1.5rem", marginRight:"30px"}} alt="Home" />
                    <img src={ChatIcon} style={{maxWidth:"1.5rem", marginRight:"30px"}} alt="Home" />
                    <img src={LogoutIcon} style={{maxWidth:"1.5rem", marginRight:"30px"}} alt="Home" />
                </Link>
            </div>

            <div className='navbar'>
                <Link to="/" className='menu-bars'>
                    {/* <FaIcons.FaBars onClick={showSidebar} /> */}
                    <img  src={LogoIcon} style={{maxWidth:"4rem"}} alt="LogoIcon" onClick={showSidebar}/>
                </Link>

            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            {/* <AiIcons.AiOutlineClose onClick={closeSidebar} /> */}
                            <img  src={BigLogoIcon} style={{maxWidth:"12rem"}} alt="LogoIcon" onClick={closeSidebar}/>
                        </Link>
                    </li>

                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;


// FaIcons.FaBars
// AiOutlineClose


