import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import CounterParent from '../Counter/CounterParent';
import About from "../../views/TabsRouter/About";
import NotFound from "../../views/TabsRouter/NotFound";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/react/task3/' />} />
            <Route exact path='/react/task3/' />
            <Route path='/react/task3/about' component={About} />
            <Route path='/react/task3/counters' component={CounterParent} />
            <Route path='/react/task3/404' component={NotFound} />
            <Route path='/*' >
                <Redirect to='/react/task3/404' />
            </Route>
        </Switch>
    </main>
)

export default Main;