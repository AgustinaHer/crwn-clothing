import React from 'react';

import './header.styles.scss';

import {BrowserRouter, Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header= () => (
    <div className='header'>
    <BrowserRouter>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
            SHOP
            </Link>
            <Link className= 'option' to='/shop'>
            CONTACT
            </Link>
            <Link className='option' to='/shop'>
            SIGN IN
            </Link>
        </div>
        </BrowserRouter>
    </div>
);

export default Header;