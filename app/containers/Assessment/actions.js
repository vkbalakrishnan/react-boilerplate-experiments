/*
 *
 * Assessment actions
 *
 */

import {
  LOAD_QUESTIONS,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS_ERROR
} from './constants';

export function loadQuestions(setname) {
	return {
		type : LOAD_QUESTIONS,
    setname
	}
}
export function questionsLoaded(questions, setname) {
  return {
    type: LOAD_QUESTIONS_SUCCESS,
    questions,
    setname
  };
}

export function questionLoadingError(error) {
	return {
		type: LOAD_QUESTIONS_ERROR,
		error
	}
}
