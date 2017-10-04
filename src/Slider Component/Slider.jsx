import React, { Component } from 'react';
import './Slider.css';
import { Carousel, Grid, Row, Col } from 'react-bootstrap';
import img from './carousel.png';

const Slider = () => {
    return (
        <Carousel>
            {
                list.map(page => {
                    return (
                        <Carousel.Item>
                            <Grid>
                                <Row className="show-grid">
                                    {
                                        page.map(pic => {
                                            return (
                                                <Col xs={6} md={4}>
                                                    <a href={pic.link}>
                                                        <img className='pic' alt="900x500" src={pic.src} />
                                                    </a>
                                                </Col>
                                            );
                                        })
                                    }
                                </Row>
                            </Grid>
                        </Carousel.Item>
                    );
                })
            }
        </Carousel>
    );
};

const list = [
    [
        {
            src: img,
            link: '#'
        }, {
            src: img,
            link: '#'
        }, {
            src: img,
            link: '#'
        }
    ], [
        {
            src: img,
            link: '#'
        }, {
            src: img,
            link: '#'
        }, {
            src: img,
            link: '#'
        }
    ], [
        {
            src: img,
            link: '#'
        }, {
            src: img,
            link: '#'
        }, {
            src: img,
            link: '#'
        }
    ], [
        {
            src: img,
            link: '#'
        }, {
            src: img,
            link: '#'
        }, {
            src: img,
            link: '#'
        }
    ]
];

export { Slider };