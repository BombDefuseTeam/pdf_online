import { Switch, Route } from 'react-router-dom';
import React from 'react';

import { PageReading } from './Pages/PageReading';
import { HomePage } from './Pages/HomePage';
import { Info } from './Pages/Info';
import { About } from './Pages/About';
import ItemCategories from './Page/ItemsCategories';
import SearchPage from './Page/SearchPage';

export const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/read' component={PageReading} />
            <Route path='/about' component={About} />
            <Route path='/info' component={Info} />
            <Route path='/category' component={ItemCategories} />
            <Route path='/searchresult' component={SearchPage} />
        </Switch>
    </main>
);