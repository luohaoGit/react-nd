import {combineReducers} from 'redux'
import todo from './todo'
import showCongratulation from './showCongratulation'

const rootReducer = combineReducers({
    todo,
    showCongratulation
});

export default rootReducer;
