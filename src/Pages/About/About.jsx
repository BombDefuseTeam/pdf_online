import React, { Component } from 'react';
import { } from 'react-bootstrap';
import './About.css';

import { ControlledHeader } from '../../Components/Header Component';
import { Footer } from '../../Components/Footer';
import { Comment } from '../../Components/Comment';

const About = () => {
    return (
        <div>
            <ControlledHeader />
            <div id="about-us-box">
                <Comment />
            </div>
            <Footer />
        </div>
    );
};

export { About };