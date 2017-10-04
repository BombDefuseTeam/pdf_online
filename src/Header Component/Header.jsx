import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import './Header.css';
import logo from './pics/logo.png';

const Header = ({
    rw,
    wr
}) => {
    const bg = 'white', txt = 'red';
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
                <NavItem className='button-box'>
                    <Button
                        id='button1'
                        href='#'
                        onMouseEnter={() => rw('button1')}
                        onMouseLeave={() => wr('button1')}
                        onMouseDown={() => rw('button1', 1)}
                        onMouseUp={() => rw('button1')}
                        style={{ backgroundColor: bg, color: txt, borderColor: 'white' }}
                    >
                        Button1
                    </Button>
                </NavItem>
                <NavItem className='button-box'>
                    <Button
                        id='button2'
                        href='#'
                        onMouseEnter={() => rw('button2')}
                        onMouseLeave={() => wr('button2')}
                        onMouseDown={() => rw('button2', 1)}
                        onMouseUp={() => rw('button2')}
                        style={{ backgroundColor: bg, color: txt, borderColor: 'white' }}
                    >
                        Button2
                    </Button>
                </NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem>
                    <Button
                        id='login'
                        href='#'
                        onMouseEnter={() => rw('login')}
                        onMouseLeave={() => wr('login')}
                        onMouseDown={() => rw('login', 1)}
                        onMouseUp={() => rw('login')}
                        style={{ backgroundColor: bg, color: txt, borderColor: 'white' }}
                    >
                        Login
                    </Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

const control = WrappedComponent =>
    class extends Component {
        rw = (id, border = null) => {
            document.getElementById(id).style.backgroundColor = 'red';
            document.getElementById(id).style.color = 'white';
            border
                ? document.getElementById(id).style.borderColor = 'grey'
                : document.getElementById(id).style.borderColor = 'white';
        }

        wr = id => {
            document.getElementById(id).style.backgroundColor = 'white';
            document.getElementById(id).style.color = 'red';
        }

        render() {
            return (
                <WrappedComponent
                    rw={this.rw}
                    wr={this.wr}
                />
            )
        }
    }

const ControlledHeader = control(Header);

export { Header, ControlledHeader };