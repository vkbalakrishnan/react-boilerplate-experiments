/*
 *
 * QnItem
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import ListItem from 'components/ListItem';
import OptionItem from 'components/OptionItem';
import Wrapper from './Wrapper';

export class QnItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
  	console.log(this.props);
    var content;
    if(this.props && this.props.item) {
    	content = (
        <div>
      		<p>Q) {this.props.item&&this.props.item.question ? this.props.item.question : ''}</p>
          <OptionItem type={this.props.item.type} options={this.props.item.options} name={'q'+this.props.item.id}></OptionItem>
        </div>
  		);
    } else {
      console.log('no item', this.props.item);

      content = null;
    }
    return (
      <Wrapper>{content}</Wrapper>
    );
  }
}

QnItem.PropTypes = {
	items : React.PropTypes.object
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(QnItem);