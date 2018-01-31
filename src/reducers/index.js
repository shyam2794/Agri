import { combineReducers } from 'redux';
import fetchReducer from './reducer_fetch';

const rootReducer = combineReducers({
    response:fetchReducer
}
);

export default rootReducer;
