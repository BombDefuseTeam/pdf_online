import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import './Header.css';
import logo from './pics/logo.png';

const Header = () => {
    return (
        <Navbar fixedTop>
            <Nav>
                <NavItem>
                    <a href="#">
                        <img id='logo' src={logo} alt='logo' />
                    </a>
                </NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    <Button className='button' href='#'>Button1</Button>
                </NavItem>
                <NavItem>
                    <Button className='button' href='#'>Button2</Button>
                </NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem>
                    <Button className='button' href='#'>Login</Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export { Header };