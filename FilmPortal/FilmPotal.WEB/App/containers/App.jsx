import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Switcher from '../components/Switcher.jsx'
import Header from './header/Header.jsx'

const App = () => {
    return (
        <Router>
            <React.Fragment>
                <Header />
                <Switcher />            
            </React.Fragment>
        </Router>
    );
};

export default App;