import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { PageReading } from './PageReading';
import { HomePage } from './HomePage';

export const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/read' component={PageReading} />
            {/* <Route path='/searchbox' component={SearchBox} />
            <Route path='/searchresult' component={SearchResult} />
            <Route path='/comment' component={Comment} />
            <Route path='/pdf' component={PDF} /> */}
        </Switch>
    </main>
);