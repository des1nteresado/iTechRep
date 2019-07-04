import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/userActions.jsx'

const initialState = {
    currentUser: {}
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, currentUser: action.currentUser, error: '' }

        case LOGIN_ERROR:
            return { ...state, error: action.error }

        default:
            return state;
    }
}