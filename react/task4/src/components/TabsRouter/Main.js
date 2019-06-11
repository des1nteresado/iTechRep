import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import CounterParent from '../Counter/CounterParent';
import About from "../../views/TabsRouter/About";
import NotFound from "../../views/TabsRouter/NotFound";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/'/>
            <Route path='/about' component={About} />
            <Route path='/counters' component={CounterParent} />
            <Route path='/login' component={About} />
            <Route path='/404' component={NotFound} />
            <Redirect to='/404' />
        </Switch>
    </main>
)

export default Main;