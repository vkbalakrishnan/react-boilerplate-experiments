import React from 'react';

import Ul from './Ul';
import Wrapper from './Wrapper';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function List(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    <Wrapper>
      <Ul>
        <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={1500}
        transitionLeaveTimeout={3000}>
        {content}
        </ReactCSSTransitionGroup>
      </Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};

export default List;
