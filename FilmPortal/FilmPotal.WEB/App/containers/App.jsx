import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header.jsx';
import About from '../views/About.jsx';
import StartPage from '../views/StartPage.jsx';
import Login from './login/Login.jsx';
import Registrar from './registration/Registrar.jsx';
import Catalog from './catalog/Catalog.jsx';
import FilmPage from './filmPage/FilmPage.jsx';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <main>
                        <Switch>
                            <Route exact path="/" component={StartPage} />
                            <Route path="/catalog" component={Catalog} />
                            <Route path="/catalog/film" component={FilmPage} />
                            <Route path="/about" component={About} />
                            <Route path="/login" component={Login} />
                            <Route path="/registration" component={Registrar} />
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
};