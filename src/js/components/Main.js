import React, { Component } from 'react';
import Home from './Home';
import Build from './Build';
import Settings from './Settings';
import Chat from './Chat';
import { Switch, Route } from 'react-router-dom';
import styles from './Main.css';

class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='main'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/build' component={Build} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/chat' component={Chat} />
                    {/* <Route path='/schedule' component={Schedule} /> */}
                </Switch>
            </div>
        );
    }
}

export default Main;
