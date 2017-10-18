import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Icon } from 'semantic-ui-react';
import { PDF } from '../Components/PDF';
import { Comment } from '../Components/Comment';
import { SearchBox } from '../Components/SearchBox';
import { SearchResult } from '../Components/SearchResult';
import { ControlledHeader } from '../Components/Header Component';
import { Footer } from '../Components/Footer';
import { SmartListItemComponent } from '../Components/listItemComponent/listItemComponent';
import FacebookProvider, { Like, Share, ShareButton, Comments } from 'react-facebook';
import './PageReading.css';

export class PageReading extends Component {
    render() {
        return (
            <div>
                <div className='Header' >
                    <ControlledHeader />
                </div>
                <Grid divided='vertically' container centered>
                    <Grid.Row>
                        <div>
                            <SearchResult />
                            <PDF />
                        </div>
                        <div>
                            <FacebookProvider appId="307311049732291">
                                <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
                            </FacebookProvider>
                            <FacebookProvider appId="307311049732291">
                                <Comments href="https://developers.facebook.com/docs/plugins/comments#configurator" numPosts="2" />
                            </FacebookProvider>
                        </div>
                    </Grid.Row>
                    <Grid.Row>
                        <div className='listItem'>
                            <SmartListItemComponent category={'Sách cùng thể loại'} />
                        </div>
                    </Grid.Row>
                </Grid>
                <div style={{ position: 'relative', 'margin-top': '60px' }} >
                    <Footer />
                </div>
            </div >
        );
    }
}

