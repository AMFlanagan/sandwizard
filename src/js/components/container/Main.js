import React, { Component } from "react";
import HomeContainer from "./HomeContainer";
import BuildContainer from "./BuildContainer";
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={HomeContainer} />
                    <Route path='/build' component={BuildContainer} />
                    {/* <Route path='/schedule' component={Schedule} /> */}
                </Switch>
            </main>
        );
    }
}

export default Main;
