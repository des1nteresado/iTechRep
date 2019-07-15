import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'
import thunk from 'redux-thunk'
import catalogReducer from './reducers/catalogReducer.jsx'
import userReducer from './reducers/userReducer.jsx'
import filmReducer from './reducers/filmReducer.jsx'
import AuthHelper from './helpers/authHelper.js'

const reducer = combineReducers({
    catalog: catalogReducer,
    form: reduxFormReducer,
    user: userReducer,
    film: filmReducer
});

const initialState = {
    catalog: {
        data: { currentPage: 0, totalPages: 0, pageSize: 0, records: [] },
        loading: false,
        error: ''
    },
    user: {
        isLogged: AuthHelper.isLogged(),
        name: AuthHelper.getLogin(),
        userId: AuthHelper.getUserId(),
        comments: [],
        marks: [],
        error: ''
    },
    film: {
        film: { comments: [], images: [] },
        comment: '',
        rating: '',
        error: ''
    }
}

export default createStore(reducer, initialState, applyMiddleware(thunk));
