import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { PDF } from './Components/PDF';
import { SearchBox } from './Components/SearchBox';
import { SearchResult } from './Components/SearchResult';
import { Comment } from './Components/Comment';

export const Main = () => (
    <main>
        <Switch>
            {/* <Route exact path='/' component={PDF}/> */}
            <Route path='/searchbox' component={SearchBox} />
            <Route path='/searchresult' component={SearchResult} />
            <Route path='/comment' component={Comment} />
            <Route path='/pdf' component={PDF} />
        </Switch>
    </main>
);