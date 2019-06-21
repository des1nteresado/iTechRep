import { createStore } from 'redux';
import todoApp from './reducers/reducer';
import initialState from './initialStateForm';

export default createStore(todoApp, initialState);