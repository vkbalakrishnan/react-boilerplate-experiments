import { createSelector } from 'reselect';

/**
 * Direct selector to the assessment state domain
 */
const selectAssessmentDomain = () => (state) => state.get('assessment');

/**
 * Other specific selectors
 */
const selectSet = () => createSelector(
	selectAssessmentDomain(),
	(assessmentState) => assessmentState.get('setname')
);

const selectQuestions = () => createSelector(
	selectAssessmentDomain(),
	(assessmentState) =>  assessmentState.get('questions')
);

/**
 * Default selector used by Assessment
 */

const selectAssessment = () => createSelector(
  selectAssessmentDomain(),
  (substate) => substate.toJS()
);

export default selectAssessment;
export {
  selectAssessmentDomain,
  selectSet,
  selectQuestions
};
