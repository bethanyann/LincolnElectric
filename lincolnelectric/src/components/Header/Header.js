import React from 'react';
//images
import RMDBLogo from '../../images/leslogo.png';
//import TMDBLogo from '../../images/tmdb_logo.svg';
//styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';
//routing
import { Link } from 'react-router-dom';


const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            </Link> 
            {/* <TMDBLogoImg src="" alt='tmdb-logo' /> */}
        </Content>
    </Wrapper>
);

export default Header;