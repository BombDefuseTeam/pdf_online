import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SearchBox } from '../Components/SearchBox';
import { Slider } from '../Components/Slider Component';
import { ControlledHeader } from '../Components/Header Component';
import { Footer } from '../Components/Footer';
import { SmartItemComponent } from '../Components/itemComponent/itemComponent';
import { SmartListItemComponent } from '../Components/listItemComponent/listItemComponent';
import { Button } from 'react-bootstrap';
import './HomePage.css';

export class HomePage extends Component {
    render() {
        return (
            <div >
                <div className='Header' >
                    <ControlledHeader />
                </div>
                <div>
                    <Slider />
                </div>
                <div className="App">
                    <div className='listItem'>
                        <SmartListItemComponent category={'Top rate'} />
                        <SmartListItemComponent category={'Top rate1'} />
                        <SmartListItemComponent category={'Top rate2'} />
                        <SmartListItemComponent category={'Top rate3'} />
                        <SmartListItemComponent category={'Top rate5'} />
                    </div>
                </div>
                <div style={{ position: 'relative', 'margin-top': '60px' }} >
                    <Footer />
                </div>
            </div>
        );
    }
}

