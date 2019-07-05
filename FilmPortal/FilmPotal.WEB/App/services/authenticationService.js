import { setCookie } from './cookieServices.js'
import { setUserSession } from './localStorageServices.js'
import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/userActions.jsx'

export default (userData) => {
    return (dispatch) => {
        let requestOpts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        };
        fetch(window.constants.login, requestOpts)
            .then((response) => { return response.json() })
            .then((data) => {
                if (data.access_token) {
                    setUserSession(data.username);
                    setCookie('auth_token', data.access_token);
                    dispatch({ type: LOGIN_SUCCESS, currentUser: data.username });
                }
            }).catch((ex) => {
                dispatch({ type: LOGIN_ERROR, currentUser: ex });
            });
    }
}
