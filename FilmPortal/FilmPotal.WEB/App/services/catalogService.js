import { GET_FILMS_SUCCESS, GET_FILMS_BEGIN, GET_FILMS_ERROR } from '../actions/catalogActions.jsx'

export default (pageIndex = 0, sortOrder) => {
    return (dispatch) => {
        dispatch({ type: GET_FILMS_BEGIN });
        let queryTrailer = '?pageIndex=' + pageIndex;
        if (sortOrder) {
            queryTrailer += '&sortOrder=' + sortOrder;
        }
        fetch(window.constants.catalog + queryTrailer)
            .then((response) => {
                return response.json()
            }).then((data) => {
                dispatch({ type: GET_FILMS_SUCCESS, posts: data });
            }).catch((ex) => {
                dispatch({ type: GET_FILMS_ERROR, posts: ex });
            });
    }
}
