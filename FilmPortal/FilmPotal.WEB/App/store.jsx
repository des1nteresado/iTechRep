import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'
import thunk from 'redux-thunk'
import catalogReducer from './reducers/catalogReducer.jsx'
import userReducer from './reducers/userReducer.jsx'
import AuthHelper from './helpers/authHelper.js'

const reducer = combineReducers({
    catalog: catalogReducer,
    form: reduxFormReducer,
    user: userReducer
});

const initialState = {
    catalog: {
        data: { currentPage: 0, totalPages: 0, pageSize: 0, records: [] },
        error: ''
    },
    user: {
        isLogged: AuthHelper.isLogged(),
        name: AuthHelper.getLogin(),
        password: '',
        error: '',
        isLoginFormShowed: false
    }
}

export default createStore(reducer, initialState, applyMiddleware(thunk));
