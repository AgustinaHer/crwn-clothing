import React from 'react';

import './homepage.styles.scss';

import Header from '../../components/header/header.component';

import Directory from "../../components/directory/directory.component";

const HomePage = () => (
    <div className='homepage'>
        <Header/>
        <Directory/>
    </div>
);

export default HomePage;