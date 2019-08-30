import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { TabStyle } from '../../style.js';
import urls from '../../routes.jsx';

const Header = (props) => {
    let hidden = false;
    let isLogged = props.user.isLogged;
    const [value, setValue] = React.useState(() => {
        if (urls.indexOf(window.location.pathname) === -1) {
            hidden = true;
            return false;
        }
        if (urls.indexOf(window.location.pathname) === 3) {
            return false;
        }
        if (urls.indexOf(window.location.pathname) === 4) {
            return 0;
        }
        return urls.indexOf(window.location.pathname);
    });

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div style={{ display: hidden ? 'none' : 'visible' }}>
            <Paper square>
                <Tabs value={value} centered style={TabStyle} onChange={handleChange}>
                    <Tab label="catalog" component={Link} to="/catalog" />
                    <Tab label="about" component={Link} to="/about" />
                    <Tab label={isLogged ? "account" : "sign in"} component={Link} to="/login" />
                </Tabs>
            </Paper>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header)