import { GET_FILM_SUCCESS, GET_FILM_ERROR, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR,  CHANGE_COMMENT_TEXT } from '../actions/filmActions.jsx'
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
				return response.json();
			}).then((data) => {
		        dispatch({ type: GET_FILM_SUCCESS, payload: data });
	        }).catch((ex) => {
                alert(ex);
		        dispatch({ type: GET_FILM_ERROR, payload: ex });
	        });
    }
}

export function addComment(author, comment, postId) {
	return (dispatch) => {
		if (author && comment) {
			fetch(window.constants.comment,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ author: author, comment: comment, postId: postId })
				}).then((response) => {
				if (response.ok) {
					dispatch({ type: ADD_COMMENT_SUCCESS });
					getPost(postId)(dispatch);
				} else {
					alert('Ошибка добавления комментария');
					dispatch({ type: ADD_COMMENT_ERROR, payload: 'Ошибка добавления комментария' });
				}
			}).catch((ex) => {
				alert(ex);
				dispatch({ type: ADD_COMMENT_ERROR, payload: ex });
			});
		} else {
			alert('Необходимо заполнить имя автора и тело комментария');
			dispatch({ type: ADD_COMMENT_ERROR, payload: 'Ошибка добавления комментария' });
		}
	}
}

export function deleteComment(commentId, postId) {
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
				getFilm(filmId)(dispatch);
			} else {
				alert('Ошибка удаления комментария');
			}
		}).catch((ex) => {
			alert(ex);
		});
	}
}