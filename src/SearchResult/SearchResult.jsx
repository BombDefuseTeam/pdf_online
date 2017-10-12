import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Reveal, Table, Container, Label, Icon, Rating } from 'semantic-ui-react';
import './SearchResult.css';

const SearchResult = () => { return (
    <Container textAlign style={{width:'1000px'}}>
        <Table padded selectable inverted fixed>
            <Table.Body>
                <Table.Row>
                    <Table.Cell style={{padding: '0', width: '300px'}}>
                        <Reveal animated='fade'>
                            <Reveal.Content visible>
                                <Image src='https://udemy-images.udemy.com/course/304x171/951618_0839_2.jpg' size='medium'/>
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Image src='https://udemy-images.udemy.com/course/304x171/919872_ed54_2.jpg' size='medium'/>
                            </Reveal.Content>
                        </Reveal>
                    </Table.Cell>
                
                    <Table.Cell style={{padding: '0 14px', maxWidth: '550px'}}>
                        <h3 style={{margin: 0}}><a href="#">The Complete Android N Developer Course</a></h3>
                        <Label as='a' color='yellow' content="Best Seller" size="tiny" tag/>
                        <p style={{margin: 0}}><a href="#"><em>Rob Percival • Web Developer And Teacher</em></a></p>
                        <p style={{margin: 0, maxWidth: '550px'}}>
                            Learn Android App Development with Android 7 Nougat by building real apps including Uber, Whatsapp and Instagram!<br/>
                            <Icon name="play circle" style={{marginRight: '-10px', width: '100px'}}> 272 videos </Icon>
                            <Icon name="time" style={{marginRight: '-10px', width: '100px'}}> 32.5 hours </Icon>
                            <Icon name="filter" style={{marginRight: '-10px', width: '100px'}}> All Levels </Icon>
                            <Icon name="cc" style={{marginRight: '-10px', width: '100px'}}> English </Icon>
                        </p>

                    </Table.Cell>

                    <Table.Cell style={{padding: '0 14px', width: '150px', textAlign: 'center'}}>
                        <h3 style={{display: 'inline', marginRight: '5px'}}>$12</h3> 
                        <strike>$200</strike>
                        <br/>
                        <Rating icon='star' defaultRating={4} maxRating={5} />
                        <p>(6,848 ratings)</p>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </Container>
);};

export { SearchResult };
