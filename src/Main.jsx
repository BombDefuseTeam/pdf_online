import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { PageReading } from './Pages/PageReading';
import { HomePage } from './Pages/HomePage';

export const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/read' component={PageReading} />
            {/* <Route path='/searchbox' component={SearchBox} />
            <Route path='/searchresult' component={SearchResult} />
            <Route path='/comment' component={Comment} />
            <Route path='/pdf' component={PDF} /> */}
        </Switch>
    </main>
);