import React, { Component } from 'react';
import './SearchPage.css';

import { SearchResult } from './Components/SearchResult/SearchResult';
import { SearchBox } from './Components/SearchBox';
import { Comment } from './Components/Comment';
import { PDF } from './Components/PDF';
import { Main } from './Main.jsx';
import { Slider } from './Components/Slider Component';
import { ControlledHeader } from './Components/Header Component';
import { Footer } from './Components/footer/Footer';
import { SmartItemComponent } from './Components/itemComponent/itemComponent';

import { Button } from 'react-bootstrap';


export default class App extends Component {
    render() {
        return (
            <div >
                <div className='Header' >
                    <ControlledHeader />
                </div>
                <div className='SearchResult'>
                    <SearchResult />
                </div>
                <div style={{ position: 'relative', 'margin-top': '60px' }} >
                    <Footer />
                </div>
            </div>
        );
    }
}