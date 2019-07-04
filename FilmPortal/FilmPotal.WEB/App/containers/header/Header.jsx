﻿import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { TabStyle } from '../../style.js';
import urls from '../../routes.jsx';

const Header = () => {
    let hidden = false;
    const [value, setValue] = React.useState(() => {
        if (urls.indexOf(window.location.pathname) === -1) {
            hidden = true;
            return false;
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
                    <Tab label="catalog" component={Link} to="/" />
                    <Tab label="about" component={Link} to="/about" />
                    <Tab label="sign in" component={Link} to="/login" />
                </Tabs>
            </Paper>
        </div>
    );
}

export default Header;