import React, { Component } from 'react';

import { SearchResult } from './Components/SearchResult/SearchResult';
import { SearchBox } from './Components/SearchBox';
import { Comment } from './Components/Comment';
import { PDF } from './Components/PDF';
import { Main } from './Main.jsx';
import { Slider } from './Components/Slider Component';
import { ControlledHeader } from './Components/Header Component';
import { Footer } from './Components/Footer';
import { SmartItemComponent } from './Components/itemComponent/itemComponent';

import { Button, Jumbotron, Row, Col } from 'react-bootstrap';
import { Container, Divider, Dropdown, Menu } from 'semantic-ui-react';
import { PaginationBasic } from './Components/Pagination/Pagination';
import 'semantic-ui-css/semantic.min.css';
import ItemCategories from './Page/ItemsCategories';

export default class App extends Component {
    render() {
        return (
            <Main />
        );
    }
}