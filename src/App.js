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
import { PageReading } from './PageReading';
import logo from './logo.svg';

export default class App extends Component {
    render() {
        return (
            <div>
                <PageReading/>
            </div>
        );
    }
}