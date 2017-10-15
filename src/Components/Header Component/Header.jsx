import React, { Component } from 'react';
import { Navbar, Nav, Button, Grid, Row, Col } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import './Header.css';
import logo from './pics/logo.png';
import { SearchBox } from '../SearchBox';
import FacebookProvider, { Login } from 'react-facebook';

const handleResponse = (data) => {
    console.log(data);
}

const handleError = (error) => {
    this.setState({ error });
}

const Header = ({
    rw,
    wr,
    onCollapse
}) => {
    const bg = 'white', txt = 'red';
    return (
        <Navbar id="navbar" fixedTop collapseOnSelect fluid onToggle={() => onCollapse()}>
            <Grid>
                <Row>
                    <Col md={1}>
                        <Navbar.Header>
                            <Nav>
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
                                {/* <Button
                                    id='login'
                                    href='#'
                                    onMouseEnter={() => rw('login')}
                                    onMouseLeave={() => wr('login')}
                                    onMouseDown={() => rw('login', 1)}
                                    onMouseUp={() => rw('login')}
                                    style={{ backgroundColor: bg, color: txt, borderColor: 'white' }}
                                >
                                    Login
                                </Button> */}
                                <FacebookProvider appId="123456789">
                                    <Login
                                        scope="email"
                                        onResponse={this.handleResponse}
                                        onError={this.handleError}
                                    >
                                        <Button
                                            id='login'
                                            onMouseEnter={() => rw('login')}
                                            onMouseLeave={() => wr('login')}
                                            onMouseDown={() => rw('login', 1)}
                                            onMouseUp={() => rw('login')}
                                            style={{ backgroundColor: bg, color: txt, borderColor: 'white' }}
                                        >
                                            <Icon id='faceicon' style={{ color: '#3B5998' }} name='facebook' />Login
                                        </Button>
                                    </Login>
                                </FacebookProvider>
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
            if (id == 'login') document.getElementById('faceicon').style.color = 'white';
            document.getElementById(id).style.backgroundColor = 'red';
            document.getElementById(id).style.color = 'white';
            border
                ? document.getElementById(id).style.borderColor = 'grey'
                : document.getElementById(id).style.borderColor = 'white';
        }

        wr = id => {
            if (id == 'login') document.getElementById('faceicon').style.color = '#3B5998';
            document.getElementById(id).style.backgroundColor = 'white';
            document.getElementById(id).style.color = 'red';
        }

        onCollapse = () => {
            const navbar = document.getElementById("navbar");
            document.body.style.paddingTop = `${navbar.clientHeight > 100 ? 96 : 234}px`;
        }

        render() {
            return (
                <WrappedComponent
                    rw={this.rw}
                    wr={this.wr}
                    onCollapse={this.onCollapse}
                />
            )
        }
    }

const ControlledHeader = control(Header);

if (matchMedia) {
    const mq = window.matchMedia("(max-width : 768px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

function WidthChange(mq) {
    const navbar = document.getElementById("navbar");
    mq.matches
        ? (navbar && (document.body.style.paddingTop = `${navbar.clientHeight + 20}px`)) || (document.body.style.paddingTop = `96px`)
        : (navbar && (document.body.style.paddingTop = `${navbar.clientHeight + 20}px`)) || (document.body.style.paddingTop = `70px`)
}

export { Header, ControlledHeader };