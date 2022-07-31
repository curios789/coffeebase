import { React, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import siteLogo from '../assets/logo.png'

const SiteHeader = styled.header`
    background-color: #c79b69;
    width: 100%;
    min-height: 150px;
`
const Navbar = styled.nav`
    background-color: #c79b69;
    width: 100%;
    padding: 1em;
    text-align: left;

    a {
        color: #fff;
    text-decoration: none;
    border-bottom: 1px solid black;
    padding: 5px;
    margin: 5px;
    transition: border 0.2s ease;
    :hover {
        border-bottom:5px solid black;
    }
    }
`;

const Logo = styled.div`
    min-height: 100px;
    text-align: center;
    padding: 1em;
    img {
        height: 100px;
    }
`

const pages = [
    { name: 'Find a Coffee', path: '/coffeePage' }, { name: 'Find a Shop', path: '/shopPage' }
];
const Header = () => {
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    return (
        <SiteHeader>
            <Logo><img src={siteLogo} /></Logo>
            <Navbar>
                {pages.map((page, index) => <NavLink key={index} to={page.path}>{page.name}</NavLink>)}
            </Navbar>
        </SiteHeader>
    );
}

export default Header;