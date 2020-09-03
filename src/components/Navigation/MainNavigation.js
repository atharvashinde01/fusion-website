import React from 'react';

import MainHeader from './MainHeader';
import logo from '../../images/logo.png';

import './MainNavigation.css';

const MainNavigation = props => {
    return(
        <MainHeader>
            <div className={`logo ${props.className}`} style={props.style}>
                <img src={props.logo} alt="Fusion" style={{width: props.width, height: props.height}} />
            </div>
        </MainHeader>
    );
};

export default MainNavigation;