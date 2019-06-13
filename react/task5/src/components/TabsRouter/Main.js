import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import CounterParent from '../Counter/CounterParent';
import About from "../../views/TabsRouter/About";
import Login from "../Authentication/Login";
import LoginRedux from "../Authentication/LoginRedux";
import NotFound from "../../views/TabsRouter/NotFound";
import Success from "../../views/TabsRouter/Success";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/'/>
            <Route exact path='/about' component={About} />
            <Route exact path='/counters' component={CounterParent} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/login-redux' component={LoginRedux} />
            <Route exact path='/login-redux/success' component={Success} />
            <Route exact path='/404' component={NotFound} />
            <Redirect to='/404' />
        </Switch>
    </main>
)

export default Main;