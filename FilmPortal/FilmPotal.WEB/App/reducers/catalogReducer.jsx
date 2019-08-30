import { GET_FILMS_BEGIN, GET_FILMS_SUCCESS, GET_FILMS_ERROR } from '../actions/catalogActions.jsx'

const initialState = {
    data: { currentPage: 0, totalPages: 0, pageSize: 0, records: [] },
    loading: false,
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FILMS_BEGIN:
            return { ...state, loading: true, error: '' }
        case GET_FILMS_SUCCESS:
            return { ...state, data: action.posts, loading: false, error: '' }
        case GET_FILMS_ERROR:
            return { ...state, loading: false , error: action.error }
        default:
            return state;
    }
}