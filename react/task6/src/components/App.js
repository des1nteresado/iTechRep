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

const mapStateToProps = state => ({ data: state.loginRedux.data, formControls: state.loginRedux.formControls });
export default connect(mapStateToProps)(App);