import React, { Component } from 'react';
import './App.css';
import { ControlledHeader } from './Header Component';

import { SmartItemComponent } from './itemComponent/itemComponent';
import { SmartListItemComponent } from './listItemComponent/listItemComponent';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
class App extends Component {
    render() {
        return (
            <ControlledHeader />
        );
    }
}

export default App;
