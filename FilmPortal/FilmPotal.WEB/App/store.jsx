import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'
import thunk from 'redux-thunk'
import catalogReducer from './containers/catalog/catalogReducer.jsx'

const reducer = combineReducers({
    catalog: catalogReducer,
    form: reduxFormReducer
});


export default createStore(catalogReducer, initialState, applyMiddleware(thunk));
