import React from 'react';

import './footer.scss';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/x.svg';
import instagram from '../../assets/instagram.svg';
import tiktok from '../../assets/tiktok.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='nav-list'>
                <li>Home</li>
                <li>Page1</li>
                <li>Page2</li>
            </ul>
            <div className='horizontal-line'></div>
            <ul className='icon-list'>
                <li>
                    <img src={facebook} alt='facebook' />
                </li>
                <li>
                    <img src={twitter} alt='twitter' />
                </li>
                <li>
                    <img src={instagram} alt='instagram' />
                </li>
                <li>
                    <img src={tiktok} alt='tiktok' />
                </li>
            </ul>
            <span>© Logo, Inc.</span>
        </footer>
    )
}

export default Footer