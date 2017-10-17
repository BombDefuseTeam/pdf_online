import React, { Component } from 'react';
import './App.css';

import { SearchResult } from './Components/SearchResult';
import { SearchBox } from './Components/SearchBox';
import { Comment } from './Components/Comment';
import { PDF } from './Components/PDF';
import { Main } from './Main.jsx';
import { Slider } from './Components/Slider Component';
import { ControlledHeader } from './Components/Header Component';
import { Footer } from './Components/footer/Footer';
import { SmartItemComponent } from './Components/itemComponent/itemComponent';
import { SmartListItemComponent } from './Components/listItemComponent/listItemComponent';
import { Button } from 'react-bootstrap';


export default class App extends Component {
    render() {
        return (
            <div >
                <div className='Header' >
                    <ControlledHeader />
                </div>
                <div className='Slider'>
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