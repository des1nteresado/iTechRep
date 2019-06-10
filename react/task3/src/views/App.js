import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import CounterParent from '../components/CounterParent';
import About from "./About";
import Page404 from "./Page404";
import Content from "./Content";

const App = () => (
    <Switch>
        <Route path='/' component={Content} />
        <Route path='/about' component={About} />
        <Route path='/counters' component={CounterParent} />
        <Route path="" component={Page404} />
    </Switch>
)

export default App;