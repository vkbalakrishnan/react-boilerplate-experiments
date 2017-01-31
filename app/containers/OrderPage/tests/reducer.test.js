import expect from 'expect';
import orderPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('orderPageReducer', () => {
  it('returns the initial state', () => {
    expect(orderPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
