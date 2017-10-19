import React, { Component } from 'react';
import { Navbar, Nav, Button, Grid, Row, Col } from 'react-bootstrap';
import { Icon, Input } from 'semantic-ui-react';
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
    onCollapse
}) => {
    return (
        <Navbar id="navbar" fixedTop collapseOnSelect inverse fluid onToggle={() => onCollapse()}>
            <Grid>
                <Row>
                    <Col md={1}>
                        <Navbar.Header>
                            <Nav>
                                <a href="/" id='logo-link'>
                                    <img id='logo' src={logo} alt='logo' />
                                </a>
                                <Navbar.Toggle />
                            </Nav>
                        </Navbar.Header>
                    </Col>

                    <Navbar.Collapse>
                        <Col md={5}>
                            <Nav>
                                {
                                    ['Category', 'Category', 'Category', 'About us'].map((val, idx) => {
                                        return (
                                            <li><a href={idx == 3 ? '/about' : '/category'}>{val}</a></li>
                                        )
                                    })
                                }
                            </Nav>
                        </Col>
                        <Col md={4}>
                            <Nav>
                                <li><SearchBox></SearchBox></li>
                            </Nav>
                        </Col>
                        <Col md={2}>
                            <Nav>
                                <FacebookProvider appId="307311049732291">
                                    <Login
                                        scope="email"
                                        onResponse={this.handleResponse}
                                        onError={this.handleError}
                                    >
                                        <li>
                                            <a href="#">
                                                <span><Icon id='faceicon' style={{ color: '#3B5998' }} name='facebook' />Login</span>
                                            </a>
                                        </li>
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

        onCollapse = () => {
            const navbar = document.getElementById("navbar");
            document.body.style.paddingTop = `${navbar.clientHeight > 150 ? 92 : 373}px`;
        }

        render() {
            return (
                <WrappedComponent
                    onCollapse={this.onCollapse}
                />
            )
        }
    }

const ControlledHeader = control(Header);

if (matchMedia) {
    const mq = window.matchMedia("(max-width : 768px)");
    const mq2 = window.matchMedia("(max-width : 992px)");

    mq2.addListener(WidthChange2);
    WidthChange2(mq2);
    mq.addListener(WidthChange);
    WidthChange(mq);

}

function WidthChange(mq) {
    const navbar = document.getElementById("navbar");
    mq.matches
        ? (navbar && (document.body.style.paddingTop = `${navbar.clientHeight + 1}px`)) || (document.body.style.paddingTop = `92px`)
        : (navbar && (document.body.style.paddingTop = `${navbar.clientHeight + 1}px`)) || (document.body.style.paddingTop = `61px`)
}

function WidthChange2(mq) {
    const navbar = document.getElementById("navbar");
    mq.matches
        ? (navbar && (document.body.style.paddingTop = `${navbar.clientHeight + 1}px`)) || (document.body.style.paddingTop = `64px`)
        : (navbar && (document.body.style.paddingTop = `${navbar.clientHeight + 1}px`)) || (document.body.style.paddingTop = `61px`)
}

export { Header, ControlledHeader };