import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import TestComponent from './TestComponent';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={"/"} exact render={() => <TestComponent/>}/>
                    <Route path={"/withProps"} render={() => <TestComponent styles={{test: {color: 'pink'}}}/>}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
