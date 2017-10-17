import React, { Component } from 'react';
import { Breadcrumb, Image, PageHeader, ListGroup, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';
import './Info.css';

import { Comment } from '../../Components/Comment';
import { ControlledHeader } from '../../Components/Header Component';
import { Footer } from '../../Components/Footer/Footer';

import image from './book1.jpg';

const Info = () => {
    return (
        <div>
            <div><ControlledHeader /></div>
            <div id="info-content">
                <div id="item-path">
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">{item.category}</Breadcrumb.Item>
                        <Breadcrumb.Item active>{item.name}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div id="main-content">
                    <div id="center-content">
                        <div id="item-image-box">
                            <Image id='item-image' src={item.image} responsive thumbnail />
                        </div>
                        <div id="item-info-box">
                            <PageHeader>{item.name}</PageHeader>
                            <ListGroup>
                                <ListGroupItem header="Authors">{item.author}</ListGroupItem>
                                <ListGroupItem header="Year">{item.year}</ListGroupItem>
                                <ListGroupItem header="Genres">{item.genre}</ListGroupItem>
                                <ListGroupItem header="Language">{item.lang}</ListGroupItem>
                            </ListGroup>
                            <div id="button-box">
                                <ButtonToolbar>
                                    <Button bsStyle="success" href="#">Download</Button>
                                    <Button bsStyle="primary" href="#">Read online</Button>
                                </ButtonToolbar>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div id="item-content-box">
                        <ListGroup>
                            <ListGroupItem header="Content">{item.content}</ListGroupItem>
                        </ListGroup>
                    </div>
                    <div id="item-comment">
                        <Comment />
                    </div>
                </div>
                <div className="clear"></div>
            </div>
            <div><Footer /></div>
        </div>
    );
};

// const control = WrappedComponent =>
//     class extends Component {
//         constructor(props) {
//             super(props);
//         }

//         render() {
//             return (
//                 <WrappedComponent
//                     Comment={this.props.Comment}
//                 />
//             );
//         }
//     };

const item = {
    name: 'Book1',
    category: 'Category1',
    author: 'Author1',
    year: 'Year1',
    genre: 'Genre1',
    lang: 'Language1',
    image: image,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget egestas metus. Nullam blandit leo lorem, vel euismod ligula hendrerit nec. Curabitur rhoncus quam urna, quis fringilla lacus dapibus blandit. Duis facilisis massa id urna convallis, a pulvinar justo pulvinar. Phasellus rutrum finibus enim, nec laoreet augue commodo quis.',
};

// const ControlledInfo = control(Info);

export { Info };