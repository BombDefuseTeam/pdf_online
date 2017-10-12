import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { PDF } from './PDF';
import { SearchBox } from './SearchBox';
import { SearchResult } from './SearchResult';
import { Comment } from './Comment';

export const Main = () => (
    <main>
        <Switch>
            {/* <Route exact path='/' component={PDF}/> */}
            <Route path='/searchbox' component={SearchBox}/>
            <Route path='/searchresult' component={SearchResult}/>
            <Route path='/comment' component={Comment}/>
            <Route path='/pdf' component={PDF}/>
        </Switch>
    </main>
);