/**
*
* QuestionSet
*
*/

import React from 'react';



function QuestionSet(props) {
	const ComponentToRender = props.component;
	let content = (<div></div>);
	
	if(props.items) {
		content = props.items.map((item, index)=>(<ComponentToRender key={`item-${index}`} item={item} />))
	}
  return (
    <ul>
    	{content}
    </ul>
  );
}

export default QuestionSet;
