import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'
import thunk from 'redux-thunk'
import catalogReducer from './containers/catalog/catalogReducer.jsx'

const reducer = combineReducers({
    catalog: catalogReducer,
    form: reduxFormReducer
});

const initialState = {
    catalog: {
        data: { currentPage: 0, totalPages: 0, pageSize: 0, records: [] },
        error: ''
    }
}

export default createStore(reducer, initialState, applyMiddleware(thunk));
