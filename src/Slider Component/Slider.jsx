import React, { Component } from 'react';
import './Slider.css';
import { Carousel, Grid, Row, Col } from 'react-bootstrap';
import img from './carousel.png';

const Slider = () => {
    return (
        <Carousel style={{ height: '300px' }}>
            {
                list.map(page => {
                    return (
                        <Carousel.Item >
                            <Grid  >
                                <Row className="show-grid">
                                    {
                                        page.map(pic => {
                                            return (
                                                <Col xs={4} md={4} sm={4} xs={4} style={{ height: '100%' }} >
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
            src: 'https://cdn02.static-adayroi.com/0/2017/04/26/1493194527587_7208673.jpg',
            link: 'https://cdn02.static-adayroi.com/0/2017/04/26/1493194527587_7208673.jpg'
        }, {
            src: img,
            link: 'https://cdn02.static-adayroi.com/0/2017/04/26/1493194527587_7208673.jpg'
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