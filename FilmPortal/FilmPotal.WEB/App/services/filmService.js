import { GET_FILM_SUCCESS, GET_FILM_ERROR, CHANGE_RATING_SUCCESS, CHANGE_RATING_ERROR, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_ERROR, CHANGE_COMMENT_TEXT, GET_MARK_SUCCESS, GET_MARK_ERROR } from '../actions/filmActions.jsx'
import AuthHelper from '../helpers/authHelper.js'

export function changeComment(comment) {
    return {
        type: CHANGE_COMMENT_TEXT,
        payload: comment
    }
}

export function getFilm(filmId) {
    return (dispatch) => {
        fetch(window.constants.film + '?filmId=' + filmId)
            .then((response) => {
                let data = response;
                data = response != '' ? response.json() : {};
                return data;
            }).then((data) => {
                dispatch({ type: GET_FILM_SUCCESS, payload: data });
            }).catch((ex) => {
                alert(ex);
                dispatch({ type: GET_FILM_ERROR, payload: ex });
            });
    }
}

export function addComment(userId, comment, filmId) {
    return (dispatch) => {
        if (userId && comment) {
            let token = AuthHelper.getToken();
            fetch(window.constants.comment,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify({ userId: userId, comment: comment, filmId: filmId })
                }).then((response) => {
                    if (response.ok) {
                        dispatch({ type: ADD_COMMENT_SUCCESS });
                        getFilm(filmId)(dispatch);
                    } else {
                        alert('Ошибка добавления комментария');
                        dispatch({ type: ADD_COMMENT_ERROR, payload: 'Ошибка добавления комментария' });
                    }
                }).catch((ex) => {
                    alert(ex);
                    dispatch({ type: ADD_COMMENT_ERROR, payload: ex });
                });
        } else {
            alert('Комментарий не может быть пустым!');
            dispatch({ type: ADD_COMMENT_ERROR, payload: 'Ошибка добавления комментария' });
        }
    }
}

export function deleteComment(commentId, filmId) {
    return (dispatch) => {
        let token = AuthHelper.getToken();
        fetch(window.constants.comment + '?commentId=' + commentId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then((response) => {
            if (response.ok) {
                dispatch({ type: DELETE_COMMENT_SUCCESS });
                getFilm(filmId)(dispatch);
            } else {
                alert('Ошибка удаления комментария');
                dispatch({ type: DELETE_COMMENT_ERROR, payload: ex });
            }
        }).catch((ex) => {
            alert(ex);
            dispatch({ type: DELETE_COMMENT_ERROR, payload: ex });
        });
    }
}

export function modifyRating(userId, mark, filmId) {
    return (dispatch) => {
        if (userId && mark) {
            let token = AuthHelper.getToken();
            fetch(window.constants.rating,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify({ userId: userId, mark: mark, filmId: filmId })
                }).then((response) => {
                    if (response.ok) {
                        dispatch({ type: CHANGE_RATING_SUCCESS });
                        getFilm(filmId)(dispatch);
                    } else {
                        alert('Ошибка изменения рейтинга');
                        dispatch({ type: CHANGE_RATING_ERROR, payload: 'Ошибка изменения рейтинга' });
                    }
                }).catch((ex) => {
                    alert(ex);
                    dispatch({ type: CHANGE_RATING_ERROR, payload: ex });
                });
        } else {
            alert('Чтобы поставить оценку - войдите в аккаунт!');
            dispatch({ type: CHANGE_RATING_ERROR, payload: 'Ошибка изменения рейтинга' });
        }
    }
}

export function getMark(userId, filmId) {
    return (dispatch) => {
        let token = AuthHelper.getToken();
        fetch(window.constants.mark,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ userId: userId, filmId: filmId })
            }).then((response) => {
                let data = response;
                data = response != '' ? response.json() : {};
                return data;
            }).then((data) => {
                dispatch({ type: GET_MARK_SUCCESS, payload: data });
                getFilm(filmId)(dispatch);
            }).catch((ex) => {
                dispatch({ type: GET_MARK_ERROR, payload: ex });
                alert(ex);
            });
    }
}