import { React, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import siteLogo from '../assets/logo.png'
import { Row, Col } from './grid';

const SiteHeader = styled.header`
    background-color: #c79b69;
    width: 100%;
    min-height: 150px;
`
const Navbar = styled.nav`
display: flex;
    flex-wrap: wrap;
    background-color: #c79b69;
    width: 100%;
    padding: 1em;
    text-align: left;
    align-items: center;
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
const LoginLinks = styled(Col)`
    text-align: right;
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
                <Col md="3">
                    {pages.map((page, index) => <NavLink key={index} to={page.path}>{page.name}</NavLink>)}
                </Col>
                <Col md="6"></Col>
                <LoginLinks md='3'><a href='#'>Login</a> <a href='#'>Register</a><a href="#">My Account</a></LoginLinks>
            </Navbar>
        </SiteHeader>
    );
}

export default Header;