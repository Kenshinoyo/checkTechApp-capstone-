import dbResults from "./dbResults";
import userInput from "./userInput";
import priceReducer from "./priceReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ dbResults, userInput, priceReducer })

export default rootReducer