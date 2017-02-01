/**
*
* QuestionWizard
*
*/

import React from 'react';
import {Row, Button} from 'react-materialize';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const btnStyleRight = {
	'float' : 'right',
	'margin' : '3px'
};

class QuestionWizard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state = {
			idx : 0,
			max : props.items ? props.items.length: 0
		}
		this.nextQuestion = this.nextQuestion.bind(this);
	}

	nextQuestion() {
		this.setState((prevState) => ({
			idx : prevState.idx < prevState.max ? ++prevState.idx : prevState.idx
		}));
	}  

	componentDidUpdate(prevProps, prevState) {
		if(this.props.items) {
			this.setState((prevState) => ({
				max : this.props.items ? this.props.items.length-1: 0
			}));
		}		
	}

  render() {
	  const ComponentToRender = this.props.component;
		let content = (<div></div>);

		if(this.props.items) {
			content = (<ComponentToRender key={this.state.idx} item={this.props.items[this.state.idx]} />);
		}
		
  	return (
	    <div>
	    	<ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
	    		{content}
	    	</ReactCSSTransitionGroup>
	    	<Row>
	    		<Button waves='light' style={btnStyleRight} onClick={() => this.nextQuestion()}>Next</Button>
	    		<Button waves='light' style={{'margin': '3px'}} className='yellow' onClick={() => this.setState({idx : 0})}>First</Button>
	    	</Row>
	    </div>
	  );
  }

}

export default QuestionWizard;
