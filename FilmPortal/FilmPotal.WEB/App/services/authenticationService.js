import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, SHOW_LOGIN_FORM, INPUT_LOGIN, INPUT_PASSWORD } from '../actions/userActions.jsx'
import AuthHelper from '../helpers/authHelper.js'

export const logout = () => {
    AuthHelper.clearAuth();
    return {
        type: LOGOUT
    }
}

export const login = (data) => {
    return (dispatch) => {
        fetch(constants.login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                dispatch({ type: LOGIN_ERROR, payload: 'Ошибка авторизации' });
                throw 'Ошибка авторизации';
            }
        }).then((data) => {
            AuthHelper.saveAuth(data.username, data.userId, data.access_token);
            dispatch({ type: LOGIN_SUCCESS, payload: data });
        }).catch((ex) => {
            alert(ex);
            dispatch({ type: LOGIN_ERROR, payload: ex });
        });
    }
}

