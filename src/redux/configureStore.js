import { applyMiddleware, combineReducers, createStore } from 'redux'

import logger from 'redux-logger'
import { products } from './products'
import thunk from 'redux-thunk'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products
        }),
        applyMiddleware(thunk, logger)
    )

    return store
}