import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, REGISTR_SUCCESS, REGISTR_ERROR } from '../actions/userActions.jsx'
import AuthHelper from '../helpers/authHelper.js'

const initialState = {
    isLogged: AuthHelper.isLogged(),
    userId: AuthHelper.getUserId(),
    name: AuthHelper.getLogin(),
    password: '',
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLogged: true, name: action.payload.username, userId: action.payload.userId, password: '', error: '' }

        case LOGIN_ERROR:
            return { ...state, error: action.payload }

        case LOGOUT:
            return { ...state, isLogged: false, name: '', userId: '', password: '' }

        case REGISTR_SUCCESS:
            return { ...state, error: '' }

        case REGISTR_ERROR:
            return { ...state, error: action.payload }

        default:
            return state;
    }
}