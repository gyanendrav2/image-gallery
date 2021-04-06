import { takeEvery, put } from 'redux-saga/effects';
import { decrementAction } from '../Actions';
import { COUNTER } from '../ActionTypes';

function* workerSaga() {
    console.log("worker saga")
    yield put(decrementAction(5));
}

// watcher saga --> listen actions
function* rootSaga() {
    yield takeEvery(COUNTER.INCREMENT, workerSaga);
}

export default rootSaga;
