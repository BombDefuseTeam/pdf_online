import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Icon } from 'semantic-ui-react';
import { Image, PageHeader } from 'react-bootstrap';
import { PDF } from '../../Components/PDF';
import { CommentComponent } from '../../Components/Comment';
import { ControlledHeader } from '../../Components/Header Component';
import { Footer } from '../../Components/Footer';
import { SmartListItemComponent } from '../../Components/listItemComponent/listItemComponent';
import './PageReading.css';

import img from './img.jpg';

export class PageReading extends Component {
    render() {
        return (
            <div>
                <ControlledHeader />

                <Grid divided='vertically' container centered>
                    <Grid.Row>
                        <div id="reading-item-box">
                            <div id="reading-item-image-box">
                                <Image id='item-image' src={img} responsive thumbnail />
                            </div>
                            <div id="reading-item-info-box">
                                <PageHeader>Book1</PageHeader>
                            </div>
                            <div style={{ clear: 'both' }}></div>
                        </div>
                    </Grid.Row>
                    <Grid.Row>
                        <PDF />
                    </Grid.Row>
                    <Grid.Row>
                        <CommentComponent />
                    </Grid.Row>
                </Grid>
                <div className='listItem'>
                    <SmartListItemComponent category={'Same Category'} />
                </div>


                <Footer />
            </div >
        );
    }
}

