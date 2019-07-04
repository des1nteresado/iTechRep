import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header.jsx';
import About from '../views/About.jsx';
import StartPage from '../views/StartPage.jsx';
import Catalog from './catalog/Catalog.jsx';


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
                            <Route path="/about" component={About} />
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
};