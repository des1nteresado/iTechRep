import React from 'react';
import Header from './Header';
import Main from './Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
    <MuiThemeProvider>
        <React.Fragment>
            <Header />
            <Main />
        </React.Fragment>
    </MuiThemeProvider>
)

export default App;