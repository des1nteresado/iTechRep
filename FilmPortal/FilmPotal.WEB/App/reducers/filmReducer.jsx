import { GET_FILM_SUCCESS, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_ERROR, GET_FILM_ERROR, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR, CHANGE_COMMENT_TEXT, CHANGE_RATING_ERROR, CHANGE_RATING_SUCCESS, GET_MARK_SUCCESS, GET_MARK_ERROR } from '../actions/filmActions.jsx'

const initialState = {
    film: { comments: [], images:[] },
    comment: '',
    rating: '',
    error: ''
}

export default function film(state = initialState, action) {
    switch (action.type) {
        case GET_FILM_SUCCESS:
            return { ...state, film: action.payload, error: '' }

        case GET_FILM_ERROR:
            return { ...state, error: action.payload }

        case ADD_COMMENT_SUCCESS:
            return { ...state, comment: '', error: '' }

        case ADD_COMMENT_ERROR:
            return { ...state, error: action.payload }

        case CHANGE_RATING_SUCCESS:
            return { ...state, rating: action.payload, error: '' }

        case CHANGE_RATING_ERROR:
            return { ...state, error: action.payload }

        case DELETE_COMMENT_SUCCESS:
            return { ...state, comment: '', error: '' }

        case DELETE_COMMENT_ERROR:
            return { ...state, error: action.payload }

        case GET_MARK_SUCCESS:
            return { ...state, rating: action.payload }

        case GET_MARK_ERROR:
            return { ...state, error: action.payload }

        case CHANGE_COMMENT_TEXT:
            return { ...state, comment: action.payload }

        default:
            return state;
    }
}