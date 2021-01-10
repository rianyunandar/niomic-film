import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './component/Home';
import Film from './component/Film';
import Actor from './component/Actor';

class Routes extends Component {

    render() {
        return (
            <Router>
                <div>
                    <App />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/film" component={Film} />
                        <Route path="/actor" component={Actor} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;