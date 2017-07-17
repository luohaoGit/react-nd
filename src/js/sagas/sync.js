import {
    put,
    take
} from 'redux-saga/effects'

import {
    ADD_TODO,
    SHOW_CONGRATULATION
} from '../actions/ActionTypes'



export function* watchFirstThreeTodosCreation() {
    let i = 0;
    while(true){
        const action = yield take(ADD_TODO);

        i ++;

        if(i % 3 === 0){
            yield put({type: SHOW_CONGRATULATION})
        }
    }
}