import React from 'react';

import './header.scss';
import logo from '../../assets/Logo.svg';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt='logo' />
            <ul className='nav-list'>
                <li>Home</li>
                <li>Page1</li>
                <li>Page2</li>
            </ul>
            <ul className='hamburger'>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </header>
    )
}

export default Header;