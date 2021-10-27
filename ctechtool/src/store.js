import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers'

// **MOST IMPORTANT PART OF THE CODE FOR REDUX**

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store