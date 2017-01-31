import { createSelector } from 'reselect';

/**
 * Direct selector to the orderPage state domain
 */
const selectOrderPageDomain = () => (state) => state.get('orderPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by OrderPage
 */

const selectOrderPage = () => createSelector(
  selectOrderPageDomain(),
  (substate) => substate.toJS()
);

export default selectOrderPage;
export {
  selectOrderPageDomain,
};
