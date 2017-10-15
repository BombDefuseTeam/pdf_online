import React, { Component } from 'react';

import { SmartItemCardComponent } from '../itemComponent/itemComponent';
import { Item, Segment, Container, Button, Label, Icon } from 'semantic-ui-react';
import { SmartItemItemComponent } from '../itemComponent/itemItemComponent';
import { Grid, Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'semantic-ui-css/semantic.min.css';
import './listItemComponent.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, height: '100%', 'padding-top': '100px', display: 'block', background: 'red' }}
            onClick={onClick}
        ></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div

            className={className}

            style={{ ...style, height: '100%', 'padding-top': '100px', display: 'block', background: 'red' }}
            onClick={onClick}


        > </div>
    );
}

class NavButton extends React.Component {
    render() {
        return (
            <Button {...this.props} color='blue' style={{ 'padding-left': '0px', 'padding-top': '1.55px', display: 'block' }} >

            </Button>);
    }
}



const DumpCardComponent = () => {
    var showItems = [1, 2, 3, 4];
    const settingsLong = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        accessibility: true,
        arrows: true,

        responsive: [{ breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 400, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],

        accessibility: true,

        nextArrow: <NavButton />,
        prevArrow: <NavButton />
    };
    const settingsShort = {

        dots: false,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,

        vertical: true,
        swipeToSlide: true,
        swipe: true,
        accessibility: true

    };
    return (
        <Grid fluid={true} style={{ 'padding-left': '100px' }}>
            <Row>
                <h2>Test</h2>
            </Row>
            <Row style={{}} className='appearWhenLong'>

                <Slider {...settingsLong} >
                    {showItems.map(item => {
                        return (
                            <div className='item'>
                                <Col style={{ padding: '0' }} lg={12} md={12} sm={12} xs={12}>
                                    <SmartItemCardComponent />
                                </Col>
                            </div>
                        );
                    })
                    }
                    {/* </AliceCarousel> */}
                </Slider>
            </Row>
            <Row className='appearWhenShort'>

                <Slider {...settingsShort} >
                    {showItems.map(item => {
                        return (
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <SmartItemItemComponent />
                            </Col>
                        );
                    })
                    }

                </Slider>
            </Row>
        </Grid>



    );
};

const controllerListItemComponent = (WrappedComponent) =>
    class extends Component {
        render() {

            return (

                <WrappedComponent />);
        }
    };

const SmartListItemComponent = controllerListItemComponent(DumpCardComponent);

export { SmartListItemComponent };