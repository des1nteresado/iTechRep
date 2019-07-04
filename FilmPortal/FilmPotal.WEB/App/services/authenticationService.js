import { setCookie } from './cookieServices.js'
import { setUserSession } from './localStorageServices.js'
import { LOGIN_SUCCESS } from '../actions/userActions.jsx'
import store from '../store.jsx'

export default (userData) => {
    let requestOpts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };
    fetch(constants.login, requestOpts)
        .then((response) => { return response.json() })
        .then((data) => {
            if (data.access_token) {
                setUserSession(data.username);
                setCookie('auth_token', data.token);
                store.dispatch({ type: LOGIN_SUCCESS, currentUser: data.username });
            }
            else {
                console.log('nope')
            }
        })
}