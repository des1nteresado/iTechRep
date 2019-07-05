import { GET_FILMS_SUCCESS, GET_FILMS_ERROR } from '../actions/catalogActions.jsx'

const initialState = {
    data: { currentPage: 0, totalPages: 0, pageSize: 0, records: [] },
    error: ''
}

export default function catalog(state = initialState, action) {
    switch (action.type) {
        case GET_FILMS_SUCCESS:
            return { ...state, data: action.posts, error: '' }

        case GET_FILMS_ERROR:
            return { ...state, error: action.error }

        default:
            return state;
    }
}