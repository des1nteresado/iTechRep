import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header.jsx';
import About from '../views/About.jsx';
import Account from './account/Account.jsx';
import Catalog from './catalog/Catalog.jsx';
import NotFound from '../views/NotFound.jsx';


export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <main>
                        <Switch>
                            <Route exact path="/" component={Catalog} />
                            <Route path="/about" component={About} />
                            <Route path="/login" component={Account} />
                            <Route path="/404" component={NotFound} />
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
};