import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'
import thunk from 'redux-thunk'
import catalogReducer from './reducers/catalogReducer.jsx'
import userReducer from './reducers/userReducer.jsx'


const reducer = combineReducers({
    catalog: catalogReducer,
    form: reduxFormReducer,
    currentUser: userReducer
});

const initialState = {
    catalog: {
        data: { currentPage: 0, totalPages: 0, pageSize: 0, records: [] },
        error: ''
    },
    currentUser: {

    }
}

export default createStore(reducer, initialState, applyMiddleware(thunk));
