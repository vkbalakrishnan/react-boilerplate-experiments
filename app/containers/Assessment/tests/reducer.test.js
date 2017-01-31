import expect from 'expect';
import assessmentReducer from '../reducer';
import { fromJS } from 'immutable';

describe('assessmentReducer', () => {
  it('returns the initial state', () => {
    expect(assessmentReducer(undefined, {})).toEqual(fromJS({}));
  });
});
