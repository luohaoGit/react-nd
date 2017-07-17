import {fork} from 'redux-saga/effects'

import {watchFirstThreeTodosCreation} from './sync'

// 单一进入点，一次启动所有 Saga
export default function* rootSaga() {
    yield [
        fork(watchFirstThreeTodosCreation)
    ]
}