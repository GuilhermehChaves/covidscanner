import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from './pages/Main';
import Country from './pages/Country';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route component={Main} exact={true} path="/" />
                <Route component={Country} path="/country/:country" />
            </Switch>
        </Router>
    );
};

export default Routes;
