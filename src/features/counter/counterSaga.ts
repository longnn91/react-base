import {takeLatest, call, put} from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';
import { asyncIncrementByAmount, incrementByAmount, updateStatus } from './counterSlice';

function* handleUpdateStatus(action:  PayloadAction<number>): any {
    try {
        const data = yield call(fetchCount, action.payload);
        if(data) {
        yield put(incrementByAmount(action.payload));
        }
        yield put(updateStatus('idle'));
        console.log(data);    
    } catch (error) {
        yield put(updateStatus('failed'));
    }
}

export default function* counterSaga() {
   yield takeLatest(asyncIncrementByAmount.toString(), handleUpdateStatus);
}