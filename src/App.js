import React, { Component } from 'react';
import './App.css';

import { SearchResult } from './Components/SearchResult';
import { SearchBox } from './Components/SearchBox';
import { Comment } from './Components/Comment';
import { PDF } from './Components/PDF';
import { Main } from './Main.jsx';
import { Slider } from './Components/Slider Component';
import { ControlledHeader } from './Components/Header Component';

import { SmartItemComponent } from './Components/itemComponent/itemComponent';
import { SmartListItemComponent } from './Components/listItemComponent/listItemComponent';
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
                </div>

                <div style={{ marginLeft: '100px' }}>
                    <Main />
                </div>
            </div>
        );
    }
}