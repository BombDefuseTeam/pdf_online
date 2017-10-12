import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { SmartItemComponent } from './itemComponent/itemComponent';
import { SmartListItemComponent } from './listItemComponent/listItemComponent';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
class App extends Component {
    render() {
        return (

            <div className='listItem'>

                <SmartListItemComponent />

            </div>
        );
    }
}

export default App;
