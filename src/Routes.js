import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Home from './component/Home';
import Film from './component/Film';
import Actor from './component/Actor';

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={App} />
                    <Route path="/home"
                        render={props => <Home {...props} />} />
                    <Route path="/film"
                        render={props => <Film {...props} />} />
                    <Route patch="/actor"
                        render={props => <Actor {...props} />} />
                </div>
            </Router>
        );
    }
}

export default Routes;