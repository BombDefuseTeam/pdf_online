import React, { Component } from 'react';
import { Navbar, Nav, Button, Grid, Row, Col } from 'react-bootstrap';
import './Header.css';
import logo from './pics/logo.png';
import { SearchBox } from '../SearchBox';

const Header = ({
    rw,
    wr,
    onCollapse
}) => {
    const bg = 'white', txt = 'red';
    return (
        <Navbar id="navbar" fixedTop collapseOnSelect >
            <Grid>
                <Row>
                    <Col md={1}>
                        <Navbar.Header>
                            <Nav onClick={onCollapse}>
                                <a href="#" id='logo-link'>
                                    <img id='logo' src={logo} alt='logo' />
                                </a>
                                <Navbar.Toggle />
                            </Nav>
                        </Navbar.Header>
                    </Col>

                    <Navbar.Collapse>
                        <Col md={6}>
                            <Nav>
                                {
                                    Array(4).fill(null).map((btn, idx) => {
                                        return (
                                            <Button
                                                key={idx}
                                                id={`button${idx}`}
                                                href='#'
                                                onMouseEnter={() => rw(`button${idx}`)}
                                                onMouseLeave={() => wr(`button${idx}`)}
                                                onMouseDown={() => rw(`button${idx}`, 1)}
                                                onMouseUp={() => rw(`button${idx}`)}
                                                style={{ backgroundColor: bg, color: txt, borderColor: 'white' }}
                                            >
                                                Button{idx}
                                            </Button>
                                        )
                                    })
                                }
                            </Nav>
                        </Col>
                        <Col md={4}>
                            <Nav>
                                <SearchBox></SearchBox>
                            </Nav>
                        </Col>
                        <Col md={1}>
                            <Nav>
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
                            </Nav>
                        </Col>
                    </Navbar.Collapse>
                </Row>
            </Grid>
        </Navbar>
    );
};

const control = WrappedComponent =>
    class extends Component {
        constructor(props) {
            super(props);
        }

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
        handleCollapse = () => {
            return alert('hello');
        }
        render() {
            return (
                <WrappedComponent
                    rw={this.rw}
                    wr={this.wr}
                    onCollapse={this.handleCollapse}
                />
            )
        }
    }

const ControlledHeader = control(Header);

export { Header, ControlledHeader };