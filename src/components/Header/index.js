import React from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import logo from '../../images/logo.png'
import TMDBLogo from '../../images/tmdb_logo.svg';
import './Header.css';
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                {/* <img className={logo} src={logo} /> */}
                <div className='rmdb' >
                    <LogoImg src={RMDBLogo} alt='rmdb-logo' style={{ width: "280px" }} />
                    <p>RMDB</p>
                </div>

            </Link>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header; // just the header