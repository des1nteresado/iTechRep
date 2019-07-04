import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App.jsx'
import catalogReducer from './containers/catalog/catalogReducer.jsx'

function configureStore(initialState) {
    return createStore(catalogReducer, initialState, applyMiddleware(thunk))
}

const store = configureStore()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
)