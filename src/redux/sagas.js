// @flow
import { all } from 'redux-saga/effects';
import starshipsSaga from './starships/saga';


export default function* rootSaga(getState){
  yield all([
    starshipsSaga(),
  ]);
}
