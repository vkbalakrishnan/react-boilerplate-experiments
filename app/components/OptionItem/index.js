/**
*
* OptionItem
*
*/

import React from 'react';
import {Row, Input} from 'react-materialize';


function OptionItem(props) {
	console.log(props);
	let content = (<div></div>);
	if(props.type) {
		switch (props.type) {
			case 'singlechoice_input': 
				content = (<Input name={props.name} />);
				break;
			case 'ltr_value' : 
				content = (<Input name={props.name} />);
				break;
			case 'singlechoice' :
				content = (<ul>
					{props.options.map((option, idx)=>(
							<Input key={`option-id-${idx}`} name={props.name} type='radio' value={option.id} label={option.option} />
					))}
				</ul>)
				break;
			case 'multichoice' :
				content = (<ul>
					{props.options.map((option, idx)=>(
							<Input key={`option-id-${idx}`} name={props.name} type='checkbox' value={option.id} label={option.option} />
					))}
				</ul>)
				break;
			default : 
				console.log(props.type);
				content = (<p>This type not defined.</p>)
		}
	}
  return (
    <Row>
    	{content}
    </Row>
  );
}

export default OptionItem;
