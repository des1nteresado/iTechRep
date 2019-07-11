import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, REGISTR_SUCCESS, REGISTR_ERROR } from '../actions/userActions.jsx'
import AuthHelper from '../helpers/authHelper.js'

export const registration = (data) => {
    return (dispatch) => {
        fetch(constants.registration, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if (response.ok) {
                alert('Регистрация прошла успешно.')   
                window.location = '/login'          
            } else {
                dispatch({ type: REGISTR_ERROR, payload: 'Пользователь с таким именем уже зарегестрирован!' });
                throw 'Пользователь с таким именем уже зарегестрирован!';
            }
        }).then(() => {
            dispatch({ type: REGISTR_SUCCESS });
        }).catch((ex) => {
            alert(ex);
            dispatch({ type: REGISTR_ERROR, payload: ex });
        });
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
            AuthHelper.saveAuth(data.username, data.userId, data.access_token);
            dispatch({ type: LOGIN_SUCCESS, payload: data });
        }).catch((ex) => {
            alert(ex);
            dispatch({ type: LOGIN_ERROR, payload: ex });
        });
    }
}

