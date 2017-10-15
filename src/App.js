import React, { Component } from 'react';
import './App.css';

import { SearchResult } from './SearchResult';
import { SearchBox } from './SearchBox';
import { Comment } from './Comment';
import { PDF } from './PDF';
import { Main } from './Main.jsx';
import { Slider } from './Slider Component';
import { ControlledHeader } from './Header Component';

import { SmartItemComponent } from './itemComponent/itemComponent';
import { SmartListItemComponent } from './listItemComponent/listItemComponent';
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