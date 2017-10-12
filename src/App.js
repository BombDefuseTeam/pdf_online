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
            <div>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to React</h2>
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <ul>
                        <li><a href="/searchbox">Search Box</a></li>
                        <li><a href="/searchresult">Search Result</a></li>
                        <li><a href="/comment">Comment</a></li>
                        <li><a href="/pdf">PDF</a></li>
                    </ul>
                    <br />
                    <SmartListItemComponent />
                </div>

                <div style={{ marginLeft: '100px' }}>
                    <Main />
                </div>
            </div>
        );
    }
}