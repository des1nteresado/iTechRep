import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { TabStyle } from '../style';
import urls from '../routes';

const Header = () => {
    let hidden = false;
    const [value, setValue] = React.useState(() => {
        if (window.location.pathname === '/404' || urls.indexOf(window.location.pathname) === -1) {
            hidden = true;
            return false;
        }
        return urls.indexOf(window.location.pathname) === 5 ? false : urls.indexOf(window.location.pathname);
    });

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    const style = hidden === true ? { display: 'none' } : {};

    return (
        <div style={style}>
            <Paper square>
                <Tabs value={value} centered style={TabStyle} onChange={handleChange}>
                    <Tab label="about us" component={Link} to={process.env.PUBLIC_URL + "/about"} />
                    <Tab label="counters" component={Link} to={process.env.PUBLIC_URL + "/counters"} />
                    <Tab label="sign in" component={Link} to={process.env.PUBLIC_URL + "/login"} />
                    <Tab label="sign in with redux" component={Link} to={process.env.PUBLIC_URL + "/login-redux"} />
                    <Tab label="sign in with redux-form" component={Link} to={process.env.PUBLIC_URL + "/login-redux-form"} />
                </Tabs>
            </Paper>
        </div>
    );
}

export default Header;