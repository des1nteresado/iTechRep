import { REGISTR_SUCCESS, REGISTR_ERROR } from '../actions/userActions.jsx'

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

