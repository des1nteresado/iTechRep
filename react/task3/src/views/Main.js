import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import CounterParent from '../components/CounterParent';
import About from "./About";
import NotFound from "./NotFound";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/'/>
            <Route path='/about' component={About} />
            <Route path='/counters' component={CounterParent} />
            <Route path='/404' component={NotFound} />
            <Redirect to='/404' />
        </Switch>
    </main>
)

export default Main;