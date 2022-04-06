import { applyMiddleware, createStore } from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';

export function storeConfig() {
    return createStore(
        rootReducers,
        applyMiddleware(thunk)
    );
}
