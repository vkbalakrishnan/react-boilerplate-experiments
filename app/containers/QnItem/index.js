/*
 *
 * QnItem
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import ListItem from 'components/ListItem';

export class QnItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
  	console.log(this.props);
    const item = {
    	con : 'peeee',
    	item: this.props.item
    }
  	// console.log('item', item);

  	const content = (
  		<p>Q) {item.item&&item.item.question ? item.item.question : ''}</p>
		);
    return (
      <ListItem item={content} />
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