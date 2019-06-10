import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import CounterParent from '../components/CounterParent';
import About from "./About";
import Page404 from "./Page404";
import Header from './Header';
import Main from './Main';

const App = () => (
    <div>
        <Header />
        <Main />
    </div>
)

export default App;