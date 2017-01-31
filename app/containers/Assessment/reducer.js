/*
 *
 * Assessment reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_QUESTIONS,
  LOAD_QUESTIONS_SUCCESS
} from './constants';

const initialState = fromJS({setname : 'questions'});

function assessmentReducer(state = initialState, action) {
	console.log('assessment action', action);
  switch (action.type) {
    case LOAD_QUESTIONS:
      return state
      	.set('setname', action.setname);
    case LOAD_QUESTIONS_SUCCESS:
    	console.log('reducer', action);
    	return state
    		.set('questions', action.questions);
    default:
      return state;
  }
}

export default assessmentReducer;
