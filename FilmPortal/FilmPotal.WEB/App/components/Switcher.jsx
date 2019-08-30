import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../views/About.jsx';
import StartPage from '../views/StartPage.jsx';
import Login from '../containers/login/Login.jsx';
import Register from '../containers/registration/Register.jsx';
import Catalog from '../containers/catalog/Catalog.jsx';
import FilmPage from '../containers/filmPage/FilmPage.jsx';

const Switcher = () => {
    return (
        <Switch>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/catalog" component={Catalog} />
            <Route exact path="/catalog/film" component={FilmPage} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Register} />
        </Switch>
    );
}

export default Switcher;