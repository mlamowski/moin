import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                    <Route path="/Datenschutz" component={Datenschutz} />
                    <Route path="/Impressum" component={Impressum} />
            </Router>
        )
    }
}