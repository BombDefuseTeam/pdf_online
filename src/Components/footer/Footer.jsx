import React, { Component } from 'react';
import { Navbar, Nav, Grid, Row, Col } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import './Footer.css';



const Footer = () => {
    return (
        <Navbar id="footer" inverse color='blue'>
            <Grid>
                <Row>
                    <Col md={1}></Col>
                    <Col md={7}>
                        <p id='info' style={{ color: 'white' }}>Copyright@2017____TCNM_____PDF ONLINE</p>
                    </Col>
                    <Col md={4}>
                        <Icon link size='big' name='facebook square' />
                        <Icon link size='big' name='twitter square' />
                        <Icon link size='big' name='linkedin square' />
                        <Icon link size='big' name='github square' />
                        <Icon link size='big' name='google plus square' />
                        <Icon link size='big' name='pinterest square' />
                    </Col>
                </Row>
            </Grid>
        </Navbar>
    );
};

export { Footer };