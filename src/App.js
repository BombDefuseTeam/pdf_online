import React, { Component } from 'react';
import './App.css';

import { SearchResult } from './Components/SearchResult';
import { SearchBox } from './Components/SearchBox';
import { Comment } from './Components/Comment';
import { PDF } from './Components/PDF';
import { Main } from './Main.jsx';
import { Slider } from './Components/Slider Component';
import { ControlledHeader } from './Components/Header Component';
import { Footer } from './Components/Footer';
import { SmartItemComponent } from './Components/itemComponent/itemComponent';
import { SmartListItemComponent } from './Components/listItemComponent/listItemComponent';
import { Button } from 'react-bootstrap';
import logo from './logo.svg';

export default class App extends Component {
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

                    <ul>
                        <li><a href="/searchbox">Search Box</a></li>
                        <li><a href="/searchresult">Search Result</a></li>
                        <li><a href="/comment">Comment</a></li>
                        <li><a href="/pdf">PDF</a></li>
                    </ul>
                    <br />
                    <div className='listItem'>
                        <SmartListItemComponent />
                        <SmartListItemComponent />
                        <SmartListItemComponent />
                        <SmartListItemComponent />
                        <SmartListItemComponent />
                    </div>
                </div>

                <div style={{ marginLeft: '100px' }}>
                    {/* <Main /> */}
                </div>
            </div>
        );
    }
}