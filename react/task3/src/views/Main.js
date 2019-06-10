import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import CounterParent from '../components/CounterParent';
import About from "./About";
import App from "./App";
import Page404 from "./Page404";

const Main = () => (
    <main>
        <Switch>
            <Route path='/about' component={About} />
            <Route path='/counters' component={CounterParent} />
            <Route path='/*' component={Page404} />
        </Switch>
    </main>
)

export default Main;