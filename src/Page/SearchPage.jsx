import React, { Component } from 'react';
import './SearchPage.css';

import { SearchResult } from '../Components/SearchResult/SearchResult';
import { SearchBox } from '../Components/SearchBox';
import { Comment } from '../Components/Comment';
import { PDF } from '../Components/PDF';

import { Slider } from '../Components/Slider Component';
import { ControlledHeader } from '../Components/Header Component';
import { Footer } from '../Components/footer/Footer';
import { SmartItemComponent } from '../Components/itemComponent/itemComponent';

import { Button, Jumbotron, Row, Col } from 'react-bootstrap';
import { Container, Divider, Dropdown, Menu } from 'semantic-ui-react';
import { PaginationBasic } from '../Components/Pagination/Pagination';
import 'semantic-ui-css/semantic.min.css';


export default class SearchPage extends Component {

    render() {
        const options = [{ key: 1, text: 'Most Reviewed', value: 1 },
            { key: 2, text: 'Highest Rated', value: 2 },
            { key: 3, text: 'Newest', value: 3 },
            { key: 4, text: 'Most Revelant', value: 4 }];
        const options2 = [{ key: 1, text: 'All Categories', value: 1 },
            { key: 2, text: 'Drama', value: 2 },
            { key: 3, text: 'Fiction', value: 3 },
            { key: 4, text: 'Science Fiction', value: 4 }];
        const options3 = [{ key: 1, text: 'Most Reviewed', value: 1 },
            { key: 2, text: 'Highest Rated', value: 2 },
            { key: 3, text: 'Newest', value: 3 },
            { key: 4, text: 'Most Revelant', value: 4 }];
        return (
            <div >
                <div className='Header' >
                    <ControlledHeader />
                </div>

                <Container>
                    <Jumbotron>
                        <Row>
                            <h1>Search result for kingsman </h1>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col md={4} sm={4} lg={4}>
                                <Menu compact>
                                    <Dropdown defaultValue={options[1].value} floating selection options={options} />
                                </Menu>
                            </Col>
                            <Col md={4} sm={4} lg={4}>
                                <Menu compact>
                                    <Dropdown defaultValue={options2[0].value} floating selection options={options2} />
                                </Menu>
                            </Col>
                            <Col md={4} sm={4} lg={4}>
                                <Menu compact>
                                    <Dropdown defaultValue={options[1].value} floating selection options={options} />
                                </Menu>
                            </Col>
                        </Row>
                    </Jumbotron>
                    <Divider />
                </Container>
                <Container className='ListSearchResult' textAlign='center'>


                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <PaginationBasic />
                </Container>
                <div style={{ position: 'relative', 'margin-top': '60px' }} >
                    <Footer />
                </div>
            </div >
        );
    }
}