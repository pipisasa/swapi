import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

import { API_URL } from '../../helpers/constants';
import { 
  getDataSuccess, 
  getDataFailed, 
  getDetailSuccess,
  getNextSuccess,
} from './actions';
import { 
  GET_DATA, GET_DETAIL, GET_NEXT
} from './constants';

function* fetchData({payload:{type, query}}){
  try {
    let url = API_URL+type
    if(query) url+=(`?search=${query}`);
    const {data} = yield call(Axios, url);
    yield put(getDataSuccess(data))
  } catch (e) {
    yield put(getDataFailed(e.message))
  }
}

function* fetchNext({payload:{url}}){
  try {
    const {data} = yield call(Axios, url);
    yield put(getNextSuccess(data))
  } catch (e) {
    yield put(getDataFailed(e.message))
  }
}

function* fetchDetail({payload:{type, id}}){
  try {
    const url = API_URL+type+'/'+id+"/";
    console.log(type, id)
    const {data} = yield call(Axios, url);
    yield put(getDetailSuccess(data))
  } catch (e) {
    yield put(getDataFailed(e.message))
  }
}

export default function* starshipsSaga(){
  yield all([
    fork(function*(){yield takeEvery(GET_DATA, fetchData)}),
    fork(function*(){yield takeEvery(GET_DETAIL, fetchDetail)}),
    fork(function*(){yield takeEvery(GET_NEXT, fetchNext)}),
  ])
}