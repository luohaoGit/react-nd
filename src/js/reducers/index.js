import {combineReducers} from 'redux'
import todos from './todo'
import showCongratulation from './showCongratulation'

const rootReducer = combineReducers({
    todos,
    showCongratulation
});

export default rootReducer;
