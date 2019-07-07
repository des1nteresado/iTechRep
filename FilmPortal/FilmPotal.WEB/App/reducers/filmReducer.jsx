import { GET_FILM_SUCCESS, GET_FILM_ERROR, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR, CHANGE_COMMENT_AUTHOR, CHANGE_COMMENT_TEXT } from '../actions/filmActions.jsx/index.js'

const initialState = {
    film: { comments: [] },
    userId: '',
    comment: '',
    error: ''
}

export default function comments(state = initialState, action) {
    switch (action.type) {
        case GET_FILM_SUCCESS:
            return { ...state, post: action.payload, error: '' }

        case GET_FILM_ERROR:
            return { ...state, error: action.payload }

        case ADD_COMMENT_SUCCESS:
            return { ...state, author: '', comment: '', error: '' }

        case ADD_COMMENT_ERROR:
            return { ...state, error: action.payload }

        case CHANGE_COMMENT_TEXT:
			return { ...state, comment: action.payload }

        default:
            return state;
    }
}