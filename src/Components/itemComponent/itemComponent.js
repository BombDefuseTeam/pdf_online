import React, { Component } from 'react';
import { Image, Button, Icon, Segment, Card, Rating, Grid, Popup } from 'semantic-ui-react';
import './itemComponent.css';

const DumpItemCardComponent = ({ onMouseLeave, onMouseEnter }) => {
    const CardItem = (

        <Card style={{ 'text-decoration': 'none' }} link >
            <Image style={{ 'max-height': '250px' }} src={require('../images/unnamed.jpg')} />
            <Card.Content style={{ 'max-height': '100px' }}>
                <Card.Header>
                    Songoku
                </Card.Header>
                <Card.Meta>
                    Join in 2016
                            </Card.Meta>
                <Card.Description>
                    That is incredible commic
                            </Card.Description>

            </Card.Content>
            <Card.Content>
                <Rating icon='star' defaultRating={3} maxRating={4} />

            </Card.Content>
        </Card>

    )
    return (
        <div onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>

            <Segment basic  >
                <Popup trigger={CardItem} flowing hoverable position='right center'>
                    <Popup.Header>Test</Popup.Header>
                    <Popup.Content>
                        helelle
                    </Popup.Content>
                </Popup>

            </Segment >
        </div >
    );

};

const controllerItem = WrapperComponent =>
    class extends Component {

        handleMouseLeave = () => {

        }
        handleMouseEnter = () => {

        }
        render() {
            return <WrapperComponent onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter} />;
        }
    };


const SmartItemCardComponent = controllerItem(DumpItemCardComponent);
export { SmartItemCardComponent };

