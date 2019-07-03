import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header.jsx';
import About from './about/About.jsx';
import Catalog from './catalog/Catalog.jsx';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <main>
                        <Switch>
                            <Route path="/about" component={About} />
                            <Route path="/" component={Catalog} />
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
};