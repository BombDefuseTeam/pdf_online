import { Switch, Route } from 'react-router-dom';
import React from 'react';

import { PageReading } from './Pages/PageReading';
import { HomePage } from './Pages/HomePage';
import { Info } from './Pages/Info';
import { About } from './Pages/About';

export const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/read' component={PageReading} />
        </Switch>
    </main>
);