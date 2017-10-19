import React, { Component } from 'react';
import './ItemsCategories.css';

import { SearchResult } from '../Components/SearchResult/SearchResult';
import { SearchBox } from '../Components/SearchBox/SearchBox';
import { Comment } from '../Components/Comment';
import { PDF } from '../Components/PDF';

import { Slider } from '../Components/Slider Component';
import { ControlledHeader } from '../Components/Header Component';
import { Footer } from '../Components/footer/Footer';
import { SmartItemCardComponent } from '../Components/itemComponent/itemComponent';
import { SmartItemItemComponent } from '../Components/itemComponent/itemItemComponent.js';

import { Button, Jumbotron, Row, Col } from 'react-bootstrap';
import { Container, Divider, Dropdown, Menu, Tab } from 'semantic-ui-react';
import { PaginationBasic } from '../Components/Pagination/Pagination';
import 'semantic-ui-css/semantic.min.css';


export default class ItemCategories extends Component {

    render() {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];
        const listAll = (
            <div>
                <Row>
                    {array.map(item => {
                        return (

                            <Col lg={3} mdHidden smHidden xsHidden >

                                <SmartItemCardComponent />

                            </Col>


                        );
                    })}
                </Row>
                <Row>
                    {array.map(item => {
                        return (

                            <Col lgHidden md={12} sm={12} >

                                <SearchResult />

                            </Col>


                        );
                    })}
                </Row>
                <Row >
                    <Container fluid textAlign='center'>
                        <PaginationBasic />
                    </Container>
                </Row>
            </div>
        );
        const panes = [
            { menuItem: 'ALL', render: () => <Tab.Pane attached={false}>{listAll}</Tab.Pane> },
            { menuItem: 'DRAMA', render: () => <Tab.Pane attached={false}>{listAll}</Tab.Pane> },
            { menuItem: 'FICTION', render: () => <Tab.Pane attached={false}>{listAll}</Tab.Pane> },
            { menuItem: 'DETECTIVE NOVEL', render: () => <Tab.Pane attached={false}>{listAll}</Tab.Pane> },
            { menuItem: 'SCIENCE FICTION', render: () => <Tab.Pane attached={false}>{listAll}</Tab.Pane> }
        ];

        return (
            <div>
                <ControlledHeader />
                <Container className='forLong'>
                    <Tab className='hello' menu={{ pointing: true }} panes={panes} />
                </Container>
                <div className='forShort'>
                    <Tab menu={{ fluid: true, vertical: true, tabular: 'left' }} panes={panes} />
                </div>
                <div style={{ position: 'relative', 'margin-top': '60px' }} >
                    <Footer />
                </div>
            </div>
        );
    }
}