import React from 'react';
import Header from './Header';
import Main from './Main';
import { connect } from 'react-redux';

const App = () => (
        <React.Fragment>
            <Header />
            <Main />
        </React.Fragment>
)

const mapStateToProps = state => ({ data: state.data, formControls: state.formControls });

export default connect(mapStateToProps)(App);