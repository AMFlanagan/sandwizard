import React, { Component } from "react";
import Home from "./Home";
import Build from "./Build";
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/build' component={Build} />
                    {/* <Route path='/schedule' component={Schedule} /> */}
                </Switch>
            </main>
        );
    }
}

export default Main;
