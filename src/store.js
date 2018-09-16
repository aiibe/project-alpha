import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import content from './reducers/content';

const reducers = combineReducers({content})


// Store
export default createStore(reducers, applyMiddleware(thunk))