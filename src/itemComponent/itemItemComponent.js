import React, { Component } from 'react';
import { Item, Segment, Rating, } from 'semantic-ui-react';
import { Media, Image, Thumbnail } from 'react-bootstrap';
const DumpItemItemComponent = () => {
    return (

        <Media>
            <Media.Left align='top'>

                <Image width={100} height={100} src={require('../images/unnamed.jpg')} />
            </Media.Left>
            <Media.Body>
                <Media.Heading>Songoku</Media.Heading>
                <Rating icon='star' defaultRating={3} maxRating={4} />
            </Media.Body>
        </Media>

    );
};

const controller = (WrapComponent) =>
    class extends Component {
        render() {
            return <WrapComponent />;
        }


    };

const SmartItemItemComponent = controller(DumpItemItemComponent);
export { SmartItemItemComponent };