import { GET_FILMS_SUCCESS, GET_FILMS_ERROR } from './catalogConstants.jsx'
import "isomorphic-fetch"

export function receiveFilms(data) {
    return {
        type: GET_FILMS_SUCCESS,
        posts: data
    }
}

export function errorReceive(err) {
    return {
        type: GET_FILMS_ERROR,
        error: err
    }
}

export function getFilms(pageIndex = 0, sortOrder) {
    return (dispatch) => {
        let queryTrailer = '?pageIndex=' + pageIndex;
        if (sortOrder) {
            queryTrailer += '&sortOrder=' + sortOrder;
        }
        fetch(constants.getPage + queryTrailer)
            .then((response) => {
                return response.json()
            }).then((data) => {
                dispatch(receiveFilms(data))
            }).catch((ex) => {
                dispatch(errorReceive(err))
            });
    }
}