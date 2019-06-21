import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import CounterParent from './Counter/CounterParent';
import About from "../views/About";
import Login from "./Authentication/Login";
import NotFound from "../views/NotFound";

const Main = () => (
    <main>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'}/>
            <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
            <Route exact path={process.env.PUBLIC_URL + '/counters'} component={CounterParent} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + '/404'} component={NotFound} />
            <Redirect to={process.env.PUBLIC_URL + '/404'} />
        </Switch>
    </main>
)

export default Main;