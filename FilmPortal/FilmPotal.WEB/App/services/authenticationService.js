import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, SHOW_LOGIN_FORM, INPUT_LOGIN, INPUT_PASSWORD } from '../actions/userActions.jsx'
import AuthHelper from '../helpers/authHelper.js'

export const showLoginForm = (show) => {
    return {
        type: SHOW_LOGIN_FORM,
        payload: show
    }
}

export const inputLogin = (name) => {
    return {
        type: INPUT_LOGIN,
        payload: name
    }
}

export const inputPassword = (password) => {
    return {
        type: INPUT_PASSWORD,
        payload: password
    }
}

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
            AuthHelper.saveAuth(data.username, data.access_token);
            dispatch({ type: LOGIN_SUCCESS, payload: data.username });
        }).catch((ex) => {
            alert(ex);
            dispatch({ type: LOGIN_ERROR, payload: ex });
        });
    }
}

