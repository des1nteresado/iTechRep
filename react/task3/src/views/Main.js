import React from 'react';
import { Switch, Route } from 'react-router-dom'
import CounterParent from '../components/CounterParent';
import About from "./About";
import Header from "./Header";
import NotFound from "./NotFound";

const Main = () => (
    <main>
        <Switch>
            <Route path='/about' component={About} />
            <Route path='/counters' component={CounterParent} />
        </Switch>
    </main>
)

export default Main;