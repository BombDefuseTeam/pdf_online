import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import './PDF.css';

const PDF = () =>  { return (
    <Container textAlign style={{maxWidth:'1000px'}}>
        <object data="./Clean_Code.pdf#page=5" type="application/pdf" width="70%" height="600px">
            <iframe src="./Clean_Code.pdf#page=5" style={{ border: 'none' }} width="70%" height="700px">
      This browser does not support PDFs. Please download the PDF to view it: <a href="./Clean_Code.pdf#page=5">Download PDF</a>
            </iframe>
        </object>
    </Container>
);};

export { PDF };
