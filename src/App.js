import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchResult } from './SearchResult';
import { SearchBox } from './SearchBox';
import { Comment } from './Comment';
import { PDF } from './PDF';
import { Main } from './Main.jsx';
// import { MyPDFViewer } from './MyPDFViewer.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to React</h2>
                    </div>
                    <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    </p>   
                    <ul>
                        <li><a href="/searchbox">Search Box</a></li>
                        <li><a href="/searchresult">Search Result</a></li>
                        <li><a href="/comment">Comment</a></li>
                        <li><a href="/pdf">PDF</a></li>
                    </ul>
                    <br/>      
                </div>

                <div style={{marginLeft: '100px'}}>
                    <Main/>
                </div>
            </div>
        );
    }
}

export default App;
