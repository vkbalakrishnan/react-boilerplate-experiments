/*
 *
 * Assessment
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import { selectSet, selectQuestions } from './selectors';
import { loadQuestions } from './actions';
import List from 'components/List';
import QnItem from 'containers/QnItem';

export class Assessment extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.props.onPageLoad(this.props.params.set)
  }
  componentDidMount() {
    console.log('props', this.props);
  }

  render() {
   console.log(this.props);
    return (
      <div>
        <Helmet
          title="Assessment"
          meta={[
            { name: 'description', content: 'Description of Assessment' },
          ]}
        />
        <p>{this.props.params.set}</p>
        <List items={this.props.questions} component={QnItem}></List>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  set :  selectSet(),
  questions : selectQuestions()
})

function mapDispatchToProps(dispatch) {
  return {
    onPageLoad : (set) => dispatch(loadQuestions(set)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
