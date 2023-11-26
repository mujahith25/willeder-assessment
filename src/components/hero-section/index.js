import React from 'react';

import './hero-section.scss';
import heroLogo from '../../assets/hero-Logo.svg';
import Header from '../header';

const HeroSection = () => {
    return (
        <section className='hero-section'>
            <Header />
            <div className='details'>
                <img src={heroLogo} alt="hero-logo" />
                <p className='highlight'>Lorem ipsum dolor sit amet</p>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <p className='description'>Incididunt ut labore et dolore magna aliqua</p>
                <button className='btn'> scroll</button>
            </div>
        </section>
    )
}

export default HeroSection