import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import CounterParent from '../Counter/CounterParent';
import About from "../../views/TabsRouter/About";
import Login from "../Authentication/Login";
import LoginRedux from "../Authentication/LoginRedux";
import LRF from "../Authentication/LRF";
import NotFound from "../../views/TabsRouter/NotFound";
import SuccessRedux from "../../views/TabsRouter/SuccessRedux";
import SuccessReduxForm from "../../views/TabsRouter/SuccessReduxForm";


const Main = () => (
    <main>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} />
            <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
            <Route exact path={process.env.PUBLIC_URL + '/counters'} component={CounterParent} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + '/login-redux'} component={LoginRedux} />
            <Route exact path={process.env.PUBLIC_URL + '/login-redux/success'} component={SuccessRedux} />
            <Route exact path={process.env.PUBLIC_URL + '/login-redux-form'} component={LRF} />
            <Route exact path={process.env.PUBLIC_URL + '/login-redux-form/success'} component={SuccessReduxForm} />
            <Route exact path={process.env.PUBLIC_URL + '/404'} component={NotFound} />
            <Redirect to={process.env.PUBLIC_URL + '/404'} />
        </Switch>
    </main>
)

export default Main;