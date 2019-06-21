import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'
import reducerRedux from './reducers/reducer';

const reducer = combineReducers({
    form: reduxFormReducer,
    loginRedux: reducerRedux
})

export default createStore(reducer);