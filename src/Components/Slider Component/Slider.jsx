import React, { Component } from 'react';
import './Slider.css';
import { Carousel, Grid, Row, Col } from 'react-bootstrap';
import img from './img.jpg';

const Slider = () => {
    return (
        <Carousel id='mainSlider'>
            {
                list.map(item => {
                    return (
                        <Carousel.Item>
                            {/* <Grid>
                                <Row className="show-grid">
                                    <Col xs={12} md={12} sm={12} xs={12}>
                                        <a href={item.link}>
                                            <img className='pic' alt="img" src={item.src} />
                                        </a>
                                    </Col>
                                </Row>
                            </Grid> */}
                            <a href={item.link}>
                                <img className='pic' alt="img" src={item.src} />
                            </a>
                        </Carousel.Item>
                    );
                })
            }
        </Carousel>
    );
};

const list = [
    {
        src: img,
        link: '#'
    }, {
        src: img,
        link: '#'
    }, {
        src: img,
        link: '#'
    }, {
        src: img,
        link: '#'
    }
];

export { Slider };