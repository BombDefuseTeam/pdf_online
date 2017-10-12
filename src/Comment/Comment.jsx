import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import FacebookProvider, { Like, Comments } from 'react-facebook';
import './Comment.css';
 
export class Comment extends Component {
    render() {
        return (
            <Container textAlign style={{maxWidth:'1000px'}}>
                <FacebookProvider appId="307311049732291">
                    <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
                </FacebookProvider>
                <FacebookProvider appId="307311049732291">
                    <Comments href="https://developers.facebook.com/docs/plugins/comments#configurator" numPosts="5" />
                </FacebookProvider>
            </Container>
        );
    }
}

