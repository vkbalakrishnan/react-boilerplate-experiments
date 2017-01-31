import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_QUESTIONS } from './constants';
import { questionsLoaded, questionLoadingError} from './actions'

import {selectSet} from './selectors';

import request from 'utils/request';


export function* getQuestions() {
  // Select username from store
  const setname = yield select(selectSet());
  const requestURL = `http://localhost:3099/${setname}.json`;

  try {
    // Call our request helper (see 'utils/request')
    const questions = yield call(request, requestURL);
    yield put(questionsLoaded(questions, setname));
  } catch (err) {
    yield put(questionLoadingError(err));
  }
}

export function* getAssessmentQWatcher() {
  yield fork(takeLatest, LOAD_QUESTIONS, getQuestions);
}

// Individual exports for testing
export function* questionsSaga() {
  const watcher = yield fork(getAssessmentQWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  questionsSaga,
];
